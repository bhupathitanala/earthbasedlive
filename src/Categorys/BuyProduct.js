import React, { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import Apicalls, { post_url } from "../Apicalls";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function BuyProduct({ showModal, handleBuyModal, selectedCard }) {
    const user = useSelector((state) => state.user.auth.user)
    const initialState = [
        { title: 'Login', stepClassName: '', type: 'login', isValid: false },
        { title: 'Billing And Shipping', stepClassName: '', type: 'bilandship', isValid: false },
        { title: 'Payment', stepClassName: '', type: 'payment', isValid: false },
        { title: 'Confirm', stepClassName: '', type: 'confirm', isValid: false },
    ]
    const [stepData, setStepData] = useState([
        { title: 'Login', stepClassName: '', type: 'login', isValid: false },
        { title: 'Billing And Shipping', stepClassName: '', type: 'bilandship', isValid: false },
        { title: 'Payment', stepClassName: '', type: 'payment', isValid: false },
        { title: 'Confirm', stepClassName: '', type: 'confirm', isValid: false },
    ]);
    const [requiredFields, setRequiredFields] = useState({});
    const [data, setData] = useState({});
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.ID) {
            Promise.all([
                Apicalls.get('order/last/' + user.ID)
            ]).then(([data]) => {
                console.log(Object.keys(data.data[0]).length)
                if (Object.keys(data.data[0]).length > 0) {
                    let address = JSON.parse(data.data[0].address)
                    setData({
                        ...data,
                        ['h.no']: address?.['h.no'],
                        ['pincode']: address?.['pincode'],
                        ['village']: address?.['village'],
                        ['district']: address?.['district'],
                        ['state']: address?.['state'],
                        ['mandal']: address?.['mandal']
                    })
                }
            })
        }
    }, [])

    useEffect(() => {
        if (showModal) {
            let updatedStepData = [...stepData];
            if (user?.ID) {
                updatedStepData[0].stepClassName = 'step-complete';
                updatedStepData[0].isValid = true;
                updatedStepData[1].stepClassName = 'step-active';
            } else {
                navigate('/login', { state: 'buyproduct' });
            }
            setStepData(updatedStepData);
        }
    }, [user?.ID, navigate, showModal]);

    console.log(selectedCard)

    const validateStep = (stepIndex) => {
        let isValid = true;
        console.log(stepIndex);
        // Validation logic for each step
        switch (stepIndex) {
            case 1: // Billing and Shipping
                // Example validation: Check if first name is provided
                if (!data.firstName) {
                    isValid = false;
                    setRequiredFields({ ...requiredFields, firstName: true });
                } else {
                    setRequiredFields({ ...requiredFields, firstName: false });
                }

                // Example validation: Check if H.no is provided
                if (!data['h.no']) {
                    isValid = false;
                    setRequiredFields({ ...requiredFields, ['h.no']: true });
                } else {
                    setRequiredFields({ ...requiredFields, ['h.no']: false });
                }

                // Example validation: Check if village is provided
                if (!data.village) {
                    isValid = false;
                    setRequiredFields({ ...requiredFields, village: true });
                } else {
                    setRequiredFields({ ...requiredFields, village: false });
                }

                // Example validation: Check if pincode is provided
                if (!data.pincode) {
                    isValid = false;
                    setRequiredFields({ ...requiredFields, pincode: true });
                } else {
                    setRequiredFields({ ...requiredFields, pincode: false });
                }

                // Example validation: Check if mandal is provided
                if (!data.mandal) {
                    isValid = false;
                    setRequiredFields({ ...requiredFields, mandal: true });
                } else {
                    setRequiredFields({ ...requiredFields, mandal: false });
                }

                // Example validation: Check if district is provided
                if (!data.district) {
                    isValid = false;
                    setRequiredFields({ ...requiredFields, district: true });
                } else {
                    setRequiredFields({ ...requiredFields, district: false });
                }

                // Example validation: Check if state is provided
                if (!data.state) {
                    isValid = false;
                    setRequiredFields({ ...requiredFields, state: true });
                } else {
                    setRequiredFields({ ...requiredFields, state: false });
                }
                break;
            case 2: // Payment
                // Example validation: Check if payment type is selected
                if (!data.paymentType) {
                    isValid = false;
                }
                break;
            case 3: // Confirm
                // Example validation: Check if confirm checkbox is checked
                if (!data.confirm) {
                    isValid = false;
                }
                break;
            default:
                break;
        }
        return isValid;
    };


    const handleNextStep = (stepIndex) => {
        if (stepIndex >= 0) {
            const isValid = validateStep(stepIndex);
            if (isValid) {
                let updatedStepData = [...stepData];
                updatedStepData[stepIndex].stepClassName = 'step-complete';
                updatedStepData[stepIndex].isValid = true;
                if (stepIndex < stepData.length - 1) {
                    updatedStepData[stepIndex + 1].stepClassName = 'step-active';
                }
                setStepData(updatedStepData);
            }
        }
    };
    const currentStepIndex = stepData.findIndex(step => step.stepClassName === 'step-active');
    console.log(currentStepIndex * 25)

    const buyProductItem = () => {
        if (stepData.every(step => step.isValid)) {
            // Construct payload
            const payload = {
                name: `${data.firstName} ${data.lastName}`,
                address: JSON.stringify({
                    'h.no': data['h.no'],
                    // village: data.village,
                    pincode: data.pincode,
                    city: data.city,
                    // district: data.district,
                    state: data.state,
                    coupon: ''
                }),
                quantity: quantity,
                paymentType: data.paymentType === 'cod' ? '0' : '1',
                productId: selectedCard.ID,
                userId: user.ID,
                finalAmount: selectedCard.price,
                status: '0'
            };

            // Proceed with buying the product
            Promise.all([
                Apicalls.post('order', { ...payload })
            ]).then(([data]) => {
                if (Object.keys(data.data).length > 0) {
                    handleBuyModal()
                    setStepData(initialState)
                }
            }).catch(error => {
                console.log(error)
            });
        }
    };


    return (
        <Modal show={showModal} onHide={handleBuyModal} size="xl">
            <Modal.Header>
                <Modal.Title>
                    {selectedCard && <div>
                        {selectedCard.title}
                        <br />
                        <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', alignItems: 'center' }}>
                            <div>
                                <img src={post_url + JSON.parse(selectedCard?.productImages)[0]} alt={selectedCard.title} className='img-fluid shopimg p-3' />
                            </div>
                            <div>
                                <input type="number" className='form-control mb-3' value={quantity} onChange={(e) => {
                                    if (e.target.value > 0)
                                        setQuantity(e.target.value)
                                }} />
                            </div>
                        </div>
                    </div>
                    }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container pb-5 mb-sm-4">
                    <div className="steps" style={{ border: '2px solid black', padding: '20px' }}>
                        <div className="steps-header">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: currentStepIndex * 25 + '%' }} aria-valuenow={(currentStepIndex + 1) * 25} aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className="steps-body" style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%', paddingTop: '20px' }}>
                            {stepData.map((item, index) => (
                                <div className={"step " + item.stepClassName} style={index === (currentStepIndex) ? { color: 'blue' } : {}} key={index}>
                                    <span className={"step-indicator " + item.stepClassName}></span>
                                    <span className="step-icon">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Render step content based on active step */}
                    {stepData.map((item, index) => {
                        if (index === 1 && item.stepClassName.includes('active')) {
                            return (
                                <div key={index}>
                                    <label className='mb-2 mt-2'>First Name</label>
                                    <input type="text" style={{ borderColor: requiredFields['firstName'] ? 'red' : '' }} onChange={(e) => setData({ ...data, firstName: e.target.value })} value={data['firstName']} placeholder='Enter Your First Name' className='form-control mb-3' />

                                    <label className='mb-2 mt-2'>Last Name</label>
                                    <input type="text" style={{ borderColor: requiredFields['lastName'] ? 'red' : '' }} onChange={(e) => setData({ ...data, lastName: e.target.value })} value={data['lastName']} placeholder='Enter Your Last Name' className='form-control mb-3' />

                                    <label className='mb-2 mt-2'>Address</label>
                                    <input type="text" style={{ borderColor: requiredFields['h.no'] ? 'red' : '' }} onChange={(e) => setData({ ...data, ['h.no']: e.target.value })} value={data['h.no']} placeholder='Enter Your House number/flat numer/ building name' className='form-control mb-3' />

                                    <label className='mb-2 mt-2'>Village</label>
                                    <input type="text" style={{ borderColor: requiredFields['village'] ? 'red' : '' }} onChange={(e) => setData({ ...data, village: e.target.value })} value={data['village']} placeholder='Enter Your Village' className='form-control mb-3' />

                                    <label className='mb-2 mt-2'>Pincode</label>
                                    <input type="text" style={{ borderColor: requiredFields['pincode'] ? 'red' : '' }} onChange={(e) => setData({ ...data, pincode: e.target.value })} value={data['pincode']} placeholder='Enter Your Pincode' className='form-control mb-3' />

                                    <label className='mb-2 mt-2'>Mandal</label>
                                    <input type="text" style={{ borderColor: requiredFields['mandal'] ? 'red' : '' }} onChange={(e) => setData({ ...data, mandal: e.target.value })} value={data['mandal']} placeholder='Enter Your Mandal' className='form-control mb-3' />

                                    <label className='mb-2 mt-2'>District</label>
                                    <input type="text" style={{ borderColor: requiredFields['district'] ? 'red' : '' }} onChange={(e) => setData({ ...data, district: e.target.value })} value={data['district']} placeholder='Enter Your District' className='form-control mb-3' />

                                    <label className='mb-2 mt-2'>State</label>
                                    <input type="text" style={{ borderColor: requiredFields['state'] ? 'red' : '' }} onChange={(e) => setData({ ...data, state: e.target.value })} value={data['state']} placeholder='Enter Your State' className='form-control mb-3' />
                                </div>

                            );
                        } else if (index === 2 && item.stepClassName.includes('active')) {
                            return (
                                <div key={index}>
                                    {/* Payment options */}
                                    <label className="d-block mb-2">Payment Options:</label>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="paymentType"
                                            id="cod"
                                            value="cod"
                                            checked={data.paymentType === "cod"}
                                            onChange={(e) => setData({ ...data, paymentType: e.target.value })}
                                        />
                                        <label className="form-check-label" htmlFor="cod">
                                            Cash on Delivery
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="paymentType"
                                            id="razorPay"
                                            value="razorPay"
                                            checked={data.paymentType === "razorPay"}
                                            onChange={(e) => setData({ ...data, paymentType: e.target.value })}
                                        />
                                        <label className="form-check-label" htmlFor="razorPay">
                                            RazorPay
                                        </label>
                                    </div>
                                </div>
                            );
                        } else if (index === 3 && item.stepClassName.includes('active')) {
                            return (
                                <div key={index}>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="confirmCheckbox"
                                            checked={data.confirm}
                                            onChange={(e) => setData({ ...data, confirm: e.target.checked })}
                                        />
                                        <label className="form-check-label" htmlFor="confirmCheckbox">
                                            I confirm my order
                                        </label>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleBuyModal}>Close</Button>
                <Button variant="secondary" onClick={() => handleNextStep(currentStepIndex)}>Next</Button>
                <Button variant="secondary" onClick={() => buyProductItem()}>Buy</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default BuyProduct;

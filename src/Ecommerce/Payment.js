import React from 'react';

const Payment = ({finalamount}) => {

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const handlePayment = async () => {
        // const storage = JSON.parse(localStorage.getItem('user'));
        // const jwtToken = storage.token;

        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        
        try {
            const response = await fetch('https://spotcoders.com/earthbased/payment/createOrder.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${jwtToken}`
                },
                body: JSON.stringify({ amount: finalamount }) // amount in INR
            });

            const data = await response.json();
            if (data.error) {
                alert(`Error creating order: ${data.error}`);
                return;
            }

            // console.log(data);
            // return;

            const options = {
                key: 'rzp_test_J0o6xaM2xugXNd', // Enter the Key ID generated from the Dashboard
                amount: finalamount * 100, // Amount in paise
                currency: 'INR',
                name: 'EarthBased',
                description: 'Test Transaction',
                image: 'http://earthbased.in/static/media/footer_logo.5c4eee81ce2a5e7c9022.png',
                order_id: data.orderId,
                handler: async (response) => {
                    try {
                        const verifyResponse = await fetch('https://spotcoders.com/earthbased/payment/verifyPayment.php', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                // 'Authorization': `Bearer ${jwtToken}`
                            },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature
                            }),
                        });

                        const verifyData = await verifyResponse.json();
                        if (verifyData.status === 'success') {
                            alert('Payment successful!');
                        } else {
                            alert('Payment verification failed: ' + verifyData.message);
                        }
                    } catch (error) {
                        alert(`Error verifying payment: ${error.message}`);
                    }
                },
                prefill: {
                    name: 'SriNath Reddy',
                    email: 'srinath@earthbased.store',
                    contact: '9999999999',
                },
                notes: {
                    address: 'Razorpay Corporate Office',
                },
                theme: {
                    color: '#3399cc',
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', (response) => {
                alert('Payment failed: ' + response.error.description);
            });

            rzp.open();
        } catch (error) {
            alert(`Error opening checkout: ${error.message}`);
        }
    };

    return (
        <div>
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default Payment;
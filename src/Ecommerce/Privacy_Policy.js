import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col, Button, Carousel, Card } from 'react-bootstrap'

// Images
import About_img1 from '../assets/khushi-xs.png';
import founder_one_md from '../assets/khushi-xs.png'

export default function Privacy_Policy() {
    
    return (
        <>
        
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='name_tag  text-center mb-3'>PRIVACY POLICY – WWW.EARTHBASED.STORE</h1>

                    <h4 className='heading-title mb-2 mt-5'>INTRODUCTION</h4>
                    <p className='para sm_para'>
                        Earthbased.store (hereinafter referred to as “<i>Earthbased</i>”) acknowledges the importance of the privacy of its users and also of maintaining the confidentiality of the information provided by its users
                    </p>
                    <p className='para sm_para'>
                        This Privacy Policy provides for the practices for handling and securing users’ personal information by Earthbased and its subsidiaries and affiliates.
                    </p>

                    <p className='para sm_para'>
                        This Privacy Policy is applicable to any person (hereinafter referred to as “<i>User</i>”) who purchases, intends to purchase, or inquires about any product(s) or service(s) made available by Earthbased through any of Earthbased’s customer interface channels including its website, mobile site, mobile application & offline channels including call centers and offices (hereinafter collectively referred to as “<i>Channels</i>”).
                    </p>

                    <p className='para sm_para'>
                        For the purpose of this Privacy Policy, wherever the context so requires, "<i>you</i>" or "<i>your</i>" shall mean User, and the term "<i>we</i>", "<i>us</i>", "<i>our</i>" shall mean Earthbased. For the purpose of this Privacy Policy, “Website” shall mean and include the website(s), mobile site(s), and mobile app(s) of Earthbased.
                    </p>

                    <p className='para sm_para'>
                        By using or accessing the Website or other Channels, the User hereby agrees with the terms of this Privacy Policy and the contents herein. If you disagree with this Privacy Policy please do not use or access our Website or other Channels.
                    </p>

                    <p className='para sm_para'>
                        This Privacy Policy does not apply to any website(s), mobile site(s), and mobile app(s) of third parties, even if their websites/products are linked to our Website. The User should take note that the information and privacy practices of Earthbased’s business partners, advertisers, sponsors, or other sites to which Earthbased provides hyperlink(s), may be materially different from this Privacy Policy. Accordingly, it is recommended that you review the privacy policies and statements of any such third parties with whom they interact.
                    </p>


                    <h4 className='heading-title mb-2 mt-5'>INFORMATION WE COLLECT</h4>
                    <p className='para sm_para'>
                        We collect and store the personal information that you provide to us by using our Channels. Such personal information may include your name, email address, delivery address, payment method(s), telephone number, and other identifiers you might use. We may also automatically collect such information as you navigate through our Channels (information collected automatically may include usage details, IP addresses and information collected through cookies, web beacons and other tracking technologies).
                    </p>

                    <p className='para sm_para'>
                        Such personal information is also collected when you register on the Website, including but not limited to information about your personal identity such as name, age, gender, etc., your contact details such as your email address, postal addresses, telephone (mobile or otherwise) and/or fax numbers. The information may also include information such as your banking details (including credit/debit card) and any other information relating to your income and/or lifestyle; billing information, payment history etc. (as shared by you).
                    </p>

                    <h4 className='heading-title mb-2 mt-5'>USE AND SHARING OF INFORMATION</h4>
                    <p className='para sm_para'>
                        We use and share personal information to provide the services you request. To the extent we use your personal information to market to you, we will provide you with the ability to opt out of such uses. We use your personal information to:
                    </p>
                    <ul className='para sm_para'>
                        <li>assist sellers and business partners in handling and fulfilling orders;</li>
                        <li>enhancing customer experience;</li>
                        <li>to resolve disputes;</li>
                        <li>troubleshoot problems;</li>
                        <li>help promote a safe service;</li>
                        <li>collect money;</li>
                        <li>
                            measure consumer interest in our products and services, inform you about online and offline offers, products, services, and updates; customize your experience;
                        </li>
                        <li>detect and protect us against error, fraud, and other criminal activity;</li>
                        <li>enforce our terms and conditions;</li>
                       <li>conduct marketing research, analysis, and surveys; and</li>
                       <li>as otherwise described to you at the time of collection of information.</li>
                    </ul>


                    <p className='para sm_para'>
                        We may share your information when we believe in good faith that such sharing is reasonably necessary in order to investigate, prevent, or take action regarding possible illegal activities or to comply with the legal process. This may involve the sharing of your information with law enforcement, government agencies, courts, and/or other organizations on account of legal requests such as court orders, subpoenas or government demands to comply with the law
                    </p>

                    <p className='para sm_para'>
                        If you interact with social media features on our Services, such as the Instagram or Facebook Like button, or use your social media credentials to log in or post content, these features may collect information about your use of the Services, as well as post information about your activities on the social media service. Your interactions with social media companies are governed by their privacy policies.
                    </p>

                    <p className='para sm_para'>
                        We will ask for your permission to allow us access to your text messages (SMS), instant messages, contacts in your directory, camera, photo gallery, location, and device information: (i) to send commercial communication regarding your orders or other products and services (ii) enhance your experience on the platform and provide you access to the products and services offered on the Platform by sellers, affiliates, partners or lending partners. You understand that your access to these products/services may be affected in the event permission is not provided to us.
                    </p>

                    <h4 className='heading-title mb-2 mt-5'>COMMUNICATION</h4>
                    <p className='para sm_para'>
                        When you sign up for an account, you are opting in to receive emails from us and our affiliates or business partners. You can log in to manage your email preferences and follow the "unsubscribe" instructions in commercial email messages
                    </p>

                    <h4 className='heading-title mb-2 mt-5'>ACCESSING YOUR INFORMATION</h4>
                    <p className='para sm_para'>
                        If you would like to review, change or delete the personal information we have collected from you, or permanently delete your account, please use the "Contact Us" link at the bottom of every page.
                    </p>

                    <p className='para sm_para'>
                        We will take reasonable steps to accurately record the personal information that you provide to us and any subsequent updates.
                    </p>

                    <p className='para sm_para'>
                        We encourage you to review, update and correct the personal information that we maintain about you, and you may request that we delete personal information about you that is inaccurate, incomplete, or irrelevant for legitimate purposes, or is being processed in a way which infringes any applicable legal requirement.
                    </p>

                    <h4 className='heading-title mb-2 mt-5'>OPT-OUT OF RECEIVING OUR PROMOTIONAL E-MAILS</h4>
                    <p className='para sm_para'>
                        You will occasionally receive e-mail updates from us about special offers, new services, and other promotional offers. We hope you will find these updates interesting and informative. If you wish not to receive them, please click on the "unsubscribe" link or follow the instructions in each e-mail message
                    </p>

                    <h4 className='heading-title mb-2 mt-5'>PAYMENT CARD INFORMATION</h4>
                    <p className='para sm_para'>
                        In order to enable you to use our services, such as to place orders and make payments to certain business partners/vendors, we may require credit or debit card account information. By submitting your credit or debit card account information through our services, you expressly consent to the sharing of your information with our business partners/vendors, third-party payment processors, and other third-party service providers, and you further agree to the following terms:
                    </p>

                    <ul className='para sm_para'>
                        <li>
                            When you use a credit or debit card to secure an order through our Channels, we provide your credit or debit card account information (including card number and expiration date) to our third-party payment service providers and the applicable business partners/vendors.
                        </li>

                        <li>
                            When you initially provide your credit or debit card account information through our services in order to place an order, we provide your credit or debit card account information to our third-party payment service providers. Such third parties may store your credit or debit card account information so you can use our services in the future.
                        </li>
                    </ul>

                    <h4 className='heading-title mb-2 mt-5'>SECURITY - HOW YOUR INFORMATION IS PROTECTED</h4>
                    <p className='para sm_para'>
                        We have implemented appropriate physical, electronic, and managerial procedures to safeguard and help prevent unauthorized access to your information and to maintain data security. These safeguards take into account the sensitivity of the information that we collect, process, and store and the current state of technology. We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. The third-party service providers with respect to payment gateway and payment processing are all validated as compliant with the payment card industry standard (generally referred to as PCI compliant service providers).
                    </p>

                    <p className='para sm_para'>
                        We assume no liability or responsibility for the disclosure of your information due to errors in transmission, unauthorized third-party access, or other causes beyond our control. You play an important role in keeping your personal information secure. You should not share your user name, password, or other security information for your account with anyone. If we receive instructions using your user name and password, we will consider that you have authorized the instructions.
                    </p>

                    <h4 className='heading-title mb-2 mt-5'>PERMISSIBLE AGE</h4>
                    <p className='para sm_para'>
                        The services are not intended for users under the age of 18 (eighteen) unless permitted under applicable local laws (hereinafter referred to as the “Permissible Age”). We do not knowingly collect any personal information from users or market to or solicit information from anyone under the Permissible Age. If we become aware that a person submitting personal information is under the Permissible Age, we will delete the account and any related information as soon as possible. If you believe we might have any information from or about a user under the Permissible Age, please contact us at <a href='mailto:hello@earthbased.store'>hello@earthbased.store.</a>
                    </p>


                    <h4 className='heading-title mb-2 mt-5'>COOKIES</h4>
                    <p className='para sm_para'>
                        We, and third parties with whom we partner i.e., business partners/vendors, may use cookies, pixel tags, web beacons, mobile device IDs, flash cookies, and similar files or technologies to collect and store information with respect to your use of the services and third-party websites. A cookie is a small text file that is stored on the computer that enables us to recognize you (for example, as a registered user) when you visit our Website, store your preferences and settings, enhance your experience by delivering content and advertising specific to your interests, perform research and analytics, track your use of our services, and assist with security and administrative functions. Cookies may be persistent or stored only during an individual session. We may also include web beacons in e-mail messages or newsletters to determine whether the message has been opened and for other analytics.
                    </p>
                    

                    <h4 className='heading-title mb-2 mt-5'>CHANGES TO THIS PRIVACY POLICY</h4>
                    <p className='para sm_para'>
                        We hereby reserve the right to amend this Privacy Policy from time to time to reflect changes in the law, our data collection, and use practices, the features of our services, or advances in technology. Please check this page periodically for changes. The use of the information we collect is subject to the Privacy Policy in effect at the time such information is used. If we make any material changes to this Privacy Policy, we will post the changes here. Please review the changes carefully. Your continued use of the services following the posting of changes to this Privacy Policy will constitute your consent and acceptance of those changes.
                    </p>

                    <h4 className='heading-title mb-2 mt-5'>CONTACT US</h4>
                    <p className='para sm_para'>
                        If you have any queries relating to the processing/usage of information provided by you or our Privacy Policy, you may email the Data Protection Officer (DPO) at <a href='mailto:hello@earthbased.store'>hello@earthbased.store.</a>.store or write to us at the following address:
                    </p>

                    <h4 className='heading-title mb-2 mt-5'>ETHICAL LIVING</h4>
                    <p className='para sm_para'>Flat B, 37-2-14, Vijaysindhu Residency</p>
                    <p className='para sm_para'>Market Street, Kakinanada</p>
                    <p className='para sm_para'>East Godavari, Andhra Pradesh</p>
                    <p className='para sm_para'>India.</p>
                    
                </div>
            </div>
        </div>
        


        </>
    )
}

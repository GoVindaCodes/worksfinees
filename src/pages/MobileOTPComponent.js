// import React, { useState } from "react";
// import { Input, Button } from "@windmill/react-ui";

// const MobileOTPComponent = ({ isOpen, onClose }) => {
//     const [mobileNumber, setMobileNumber] = useState("");
//     const [otp, setOtp] = useState("");

//     const handleMobileNumberChange = (e) => {
//         setMobileNumber(e.target.value);
//     };

//     const handleOtpChange = (e) => {
//         setOtp(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     };

//     return (
//         <div>
//             <h3 className="text-lg font-semibold mb-4">Mobile OTP Verification</h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <Input type="tel" value={mobileNumber} onChange={handleMobileNumberChange} placeholder="Enter Mobile Number" />
//                 <Input type="text" value={otp} onChange={handleOtpChange} placeholder="Enter OTP" />
//                 <Button type="submit">Verify</Button>
//                 {/* <Button layout="outline" onClick={onClose}>Close</Button> */}
//             </form>
//         </div>
//     );
// };

// export default MobileOTPComponent;


import React, { useState, useEffect, useRef } from "react";
import { Input, Button } from "@windmill/react-ui";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { parsePhoneNumberFromString, getCountryCallingCode } from 'libphonenumber-js';
import { getName, getAlpha2Codes, registerLocale } from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';

const firebaseConfig = {
    apiKey: "AIzaSyBGAVOqfuKYCJ8B3D42cI4JA7W-I0-rGr4",
    authDomain: "ecomdaddyy.firebaseapp.com",
    projectId: "ecomdaddyy",
    storageBucket: "ecomdaddyy.appspot.com",
    messagingSenderId: "932602306808",
    appId: "1:932602306808:web:463676993d7d5ab81bdb0d",
    measurementId: "G-YLF5X1P9RD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

registerLocale(enLocale);

const MobileOTPComponent = ({ onOTPVerified }) => {
    const [mobileNumber, setMobileNumber] = useState("7988819180");
    const [countryCode, setCountryCode] = useState("IN");
    const [verificationStatus, setVerificationStatus] = useState(null);
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [otp, setOtp] = useState("");
    const [notification, setNotification] = useState("");

    const recaptchaVerifier = useRef(null);

    useEffect(() => {
        recaptchaVerifier.current = new RecaptchaVerifier(auth, 'recaptcha-container', {
            size: 'invisible',
            callback: () => {
                console.log('reCAPTCHA resolved');
            }
        });
    }, [auth]);


    const handleCountryCodeChange = (e) => {
        setCountryCode(e.target.value);
    };

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handleSendOtp = async () => {
        try {
            const phoneNumber = `+${getCountryCallingCode(countryCode)}${mobileNumber}`;
            const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber);
            if (parsedPhoneNumber && parsedPhoneNumber.isValid()) {
                const result = await signInWithPhoneNumber(auth, parsedPhoneNumber.number, recaptchaVerifier.current);
                setConfirmationResult(result);
                setVerificationStatus("OTP sent successfully");
                setNotification("OTP sent successfully");
            } else {
                setVerificationStatus("Invalid phone number");
                setNotification("Invalid phone number");
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
            setVerificationStatus("Error sending OTP");
            setNotification("Error sending OTP");
        }
    };

    const handleVerifyOtp = async () => {
        try {
            await confirmationResult.confirm(otp);
            setVerificationStatus("OTP verified successfully");
            setNotification("OTP verified successfully");
            if (onOTPVerified) {
                onOTPVerified();
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            setVerificationStatus("Error verifying OTP");
            setNotification("Error verifying OTP");
        }
    };

    const countryOptions = Object.keys(getAlpha2Codes()).map((code) => {
        const name = getName(code, 'en');
        return name ? <option key={code} value={code}>{name}</option> : null;
    });

    const dialingCode = countryCode ? getCountryCallingCode(countryCode) : "";

    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Mobile OTP Verification</h3>
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <select className="border rounded-md py-2 px-4 focus:outline-none" value={countryCode} onChange={handleCountryCodeChange}>
                        <option value="">Select Country</option>
                        {countryOptions}
                    </select>
                    <span className="py-2 px-4 border rounded-md">+{dialingCode}</span>
                    <Input
                        type="tel" value={mobileNumber} onChange={handleMobileNumberChange} placeholder="Enter Mobile Number" />
                </div>
                <Button onClick={handleSendOtp}>Send OTP</Button>
                {confirmationResult && (
                    <div className="space-y-4">
                        <Input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
                        <Button onClick={handleVerifyOtp}>Verify OTP</Button>
                    </div>
                )}
                {notification && <p>{notification}</p>}
                <div id="recaptcha-container"></div>
            </div>
        </div>
    );
};

export default MobileOTPComponent;


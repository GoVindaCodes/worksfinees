import React, { useState } from "react";
import { Input, Button } from "@windmill/react-ui";

const MobileOTPComponent = ({ isOpen, onClose }) => {
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState("");

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Mobile OTP Verification</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input type="tel" value={mobileNumber} onChange={handleMobileNumberChange} placeholder="Enter Mobile Number" />
                <Input type="text" value={otp} onChange={handleOtpChange} placeholder="Enter OTP" />
                <Button type="submit">Verify</Button>
                {/* <Button layout="outline" onClick={onClose}>Close</Button> */}
            </form>
        </div>
    );
};

export default MobileOTPComponent;

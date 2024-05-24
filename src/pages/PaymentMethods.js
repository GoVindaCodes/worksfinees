// import React from "react";
// import { useTranslation } from "react-i18next";
// import { Button, ModalBody, ModalFooter } from "@windmill/react-ui";
// import { FaCreditCard, FaPaypal, FaMoneyCheckAlt, FaGooglePay, FaAmazonPay } from "react-icons/fa";

// const PaymentMethods = ({ isOpen, onClose, onSetDefault }) => {
//     const { t } = useTranslation();
//     const paymentMethods = [
//         {
//             id: 1,
//             type: "Credit Card",
//             details: "Pay with your credit card",
//             icon: <FaCreditCard color="#002bff" />
//         },
//         { id: 2, type: "PayPal", details: "Pay with PayPal", icon: <FaPaypal color="#007fff" /> },
//         { id: 3, type: "Bank Transfer", details: "Transfer money from your bank account", icon: <FaMoneyCheckAlt color="#007bff" /> },
//         { id: 4, type: "Google Pay", details: "Pay with Google Pay", icon: <FaGooglePay color="#5f6368" /> },
//         { id: 5, type: "Amazon Pay", details: "Pay with Amazon Pay", icon: <FaAmazonPay color="#ff9900" /> }
//     ];

//     if (!isOpen) {
//         return null;
//     }

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//             <div className="absolute inset-0 bg-black opacity-50"></div>
//             <div className="relative z-50 bg-white rounded-lg shadow-lg max-w-lg w-full p-4">
//                 <ModalBody className="text-center custom-modal px-8 pt-6 pb-4">
//                     <h2 className="text-xl font-medium mb-2">{t("PaymentMethods")}</h2>
//                     {paymentMethods.map((method, index) => (
//                         <div key={index} className="mb-6">
//                             <div className="flex items-center justify-between border-b pb-2">
//                                 <div className="flex items-center">
//                                     <div className="mr-2 text-xl icon-color">{method.icon}</div>
//                                     <div>
//                                         <h3 className="text-lg font-semibold">{method.type}</h3>
//                                         <p className="text-gray-600">{method.details}</p>
//                                     </div>
//                                 </div>
//                                 <Button size="small" onClick={() => onSetDefault(method.type)}>
//                                     {t("Select")}
//                                 </Button>
//                             </div>
//                         </div>
//                     ))}
//                 </ModalBody>

//                 {/* <ModalFooter className="justify-center"> */}
//                 <Button layout="outline" onClick={onClose}>
//                     {t("modalKeepBtn")}
//                 </Button>
//                 {/* </ModalFooter> */}
//             </div>
//         </div>
//     );
// };

// export default PaymentMethods;


import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Button, ModalBody, ModalFooter } from "@windmill/react-ui";
import { FaCreditCard, FaPaypal, FaMoneyCheckAlt, FaGooglePay, FaAmazonPay } from "react-icons/fa";
import ProductServices from "services/ProductServices";
import { AdminContext } from "context/AdminContext";
import useAsync from "hooks/useAsync";

const PaymentMethods = ({ id, isOpen, onClose, onSetDefault }) => {
    const { t } = useTranslation();
    const paymentMethods = [
        {
            id: 1,
            type: "Credit Card",
            details: "Pay with your credit card",
            icon: <FaCreditCard color="#002bff" />
        },
        { id: 2, type: "PayPal", details: "Pay with PayPal", icon: <FaPaypal color="#007fff" /> },
        { id: 3, type: "Bank Transfer", details: "Transfer money from your bank account", icon: <FaMoneyCheckAlt color="#007bff" /> },
        { id: 4, type: "Google Pay", details: "Pay with Google Pay", icon: <FaGooglePay color="#5f6368" /> },
        { id: 5, type: "Amazon Pay", details: "Pay with Amazon Pay", icon: <FaAmazonPay color="#ff9900" /> }
    ];
    const { data, loading } = useAsync(() => ProductServices.getProductById(id));
    console.log("ids", data?._id)
    const { state } = useContext(AdminContext);
    const { adminInfo } = state;
    const userId = adminInfo?._id;
    console.log("hi", userId)
    // Function to handle setting default payment method
    // Function to handle setting default payment method
    const handleSetDefault = async (method) => {
        try {
            const userId = adminInfo?._id;
            if (!userId) {
                console.error("User ID not found.");
                return;
            }
            await ProductServices.setPaymentMethod(method, data?._id);
            onSetDefault(method.type);
        } catch (error) {
            console.error("Error setting default payment method:", error);
        }
    }


    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-50 bg-white rounded-lg shadow-lg max-w-lg w-full p-4">
                <ModalBody className="text-center custom-modal px-8 pt-6 pb-4">
                    <h2 className="text-xl font-medium mb-2">{t("PaymentMethods")}</h2>
                    {paymentMethods.map((method, index) => (
                        <div key={index} className="mb-6">
                            <div className="flex items-center justify-between border-b pb-2">
                                <div className="flex items-center">
                                    <div className="mr-2 text-xl icon-color">{method.icon}</div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{method.type}</h3>
                                        <p className="text-gray-600">{method.details}</p>
                                    </div>
                                </div>
                                <Button size="small" onClick={() => handleSetDefault(method)}>
                                    {t("Select")}
                                </Button>
                            </div>
                        </div>
                    ))}
                </ModalBody>

                {/* <ModalFooter className="justify-center"> */}
                <Button layout="outline" onClick={onClose}>
                    {t("modalKeepBtn")}
                </Button>
                {/* </ModalFooter> */}
            </div>
        </div>
    );
};

export default PaymentMethods;

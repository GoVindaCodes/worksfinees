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


// import React, { useContext } from "react";
// import { useTranslation } from "react-i18next";
// import { Button, ModalBody, ModalFooter } from "@windmill/react-ui";
// import { FaCreditCard, FaPaypal, FaMoneyCheckAlt, FaGooglePay, FaAmazonPay } from "react-icons/fa";
// import ProductServices from "services/ProductServices";
// import { AdminContext } from "context/AdminContext";
// import useAsync from "hooks/useAsync";

// const PaymentMethods = ({ id, isOpen, onClose, onSetDefault }) => {
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
//     const { data, loading } = useAsync(() => ProductServices.getProductById(id));
//     console.log("ids", data?._id)
//     const { state } = useContext(AdminContext);
//     const { adminInfo } = state;
//     const userId = adminInfo?._id;
//     console.log("hi", userId)
//     // Function to handle setting default payment method
//     // Function to handle setting default payment method
//     const handleSetDefault = async (method) => {
//         try {
//             const userId = adminInfo?._id;
//             if (!userId) {
//                 console.error("User ID not found.");
//                 return;
//             }
//             await ProductServices.setPaymentMethod(method, data?._id);
//             onSetDefault(method.type);
//         } catch (error) {
//             console.error("Error setting default payment method:", error);
//         }
//     }


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
//                                 <Button size="small" onClick={() => handleSetDefault(method)}>
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


// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { Button } from "@windmill/react-ui";
// import { FaCreditCard, FaPaypal, FaMoneyCheckAlt, FaGooglePay, FaAmazonPay } from "react-icons/fa";

// const PaymentMethods = ({ isOpen, onClose, onSetDefault }) => {
//     const { t } = useTranslation();
//     const [selectedMethod, setSelectedMethod] = useState(null);
//     const [formData, setFormData] = useState({
//         cardNumber: "",
//         expirationDate: "",
//         cvv: "",
//         paypalEmail: "",
//         bankAccount: "",
//         googlePay: "",
//         amazonPay: ""
//     });

//     const paymentMethods = [
//         {
//             id: 1,
//             type: "Credit Card",
//             details: "Pay with your credit card",
//             icon: <FaCreditCard color="#002bff" />,
//             fields: ["cardNumber", "expirationDate", "cvv"]
//         },
//         { id: 2, type: "PayPal", details: "Pay with PayPal", icon: <FaPaypal color="#007fff" />, fields: ["paypalEmail"] },
//         { id: 3, type: "Bank Transfer", details: "Transfer money from your bank account", icon: <FaMoneyCheckAlt color="#007bff" />, fields: ["bankAccount"] },
//         { id: 4, type: "Google Pay", details: "Pay with Google Pay", icon: <FaGooglePay color="#5f6368" />, fields: ["googlePay"] },
//         { id: 5, type: "Amazon Pay", details: "Pay with Amazon Pay", icon: <FaAmazonPay color="#ff9900" />, fields: ["amazonPay"] }
//     ];

//     const toggleSelectedMethod = (method) => {
//         setSelectedMethod(selectedMethod === method ? null : method);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = () => {
//         console.log("Submitted payment method:", selectedMethod);
//         console.log("Form data:", formData);
//         onSetDefault(selectedMethod.type);
//         onClose();
//     };

//     return (
//         <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? "block" : "hidden"}`}>
//             <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//             <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full p-4">
//                 <div className="text-center custom-modal px-8 pt-6 pb-4">
//                     <h2 className="text-xl font-medium mb-2">{t("PaymentMethods")}</h2>
//                     <div className="mb-6">
//                         {paymentMethods.map((method) => (
//                             <div key={method.id} className="flex items-center justify-between border-b pb-2">
//                                 <div className="flex items-center" onClick={() => toggleSelectedMethod(method)}>
//                                     <div className="mr-2 text-xl icon-color">
//                                         {method.icon}
//                                     </div>
//                                     <div>
//                                         <h3 className="text-lg font-semibold">{method.type}</h3>
//                                         <p className="text-gray-600">{method.details}</p>
//                                     </div>
//                                 </div>
//                                 <Button size="small" onClick={() => toggleSelectedMethod(method)}>
//                                     {t(selectedMethod === method ? "Unselect" : "Select")}
//                                 </Button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {selectedMethod && (
//                     <div className="mt-4">
//                         <h3 className="text-lg font-semibold mb-2">{selectedMethod.type} {t("Form")}</h3>
//                         <form>
//                             {selectedMethod.fields.map((field, index) => (
//                                 <div key={index} className="mb-4">
//                                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field}>
//                                         {t(field)}
//                                     </label>
//                                     <input
//                                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                         id={field}
//                                         name={field}
//                                         type={field === "expirationDate" ? "text" : "email"}
//                                         placeholder={field === "expirationDate" ? "MM/YYYY" : ""}
//                                         value={formData[field]}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                             ))}
//                         </form>
//                         <div className="text-center mt-4">
//                             <Button onClick={handleSubmit}>{t("Submit")}</Button>
//                         </div>
//                     </div>
//                 )}

//                 <div className="text-center mt-4">
//                     <Button layout="outline" onClick={onClose}>
//                         {t("modalKeepBtn")}
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PaymentMethods;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@windmill/react-ui";
import { FaCreditCard, FaPaypal, FaMoneyCheckAlt, FaGooglePay, FaAmazonPay } from "react-icons/fa";

const PaymentMethods = ({ isOpen, onClose, onSetDefault }) => {
    const { t } = useTranslation();
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [formData, setFormData] = useState({
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        paypalEmail: "",
        bankAccount: "",
        googlePay: "",
        amazonPay: ""
    });

    const paymentMethods = [
        {
            id: 1,
            type: "Credit Card",
            details: "Pay with your credit card",
            icon: <FaCreditCard color="#002bff" />,
            fields: ["cardNumber", "expirationDate", "cvv"]
        },
        { id: 2, type: "PayPal", details: "Pay with PayPal", icon: <FaPaypal color="#007fff" />, fields: ["paypalEmail"] },
        { id: 3, type: "Bank Transfer", details: "Transfer money from your bank account", icon: <FaMoneyCheckAlt color="#007bff" />, fields: ["bankAccount"] },
        { id: 4, type: "Google Pay", details: "Pay with Google Pay", icon: <FaGooglePay color="#5f6368" />, fields: ["googlePay"] },
        { id: 5, type: "Amazon Pay", details: "Pay with Amazon Pay", icon: <FaAmazonPay color="#ff9900" />, fields: ["amazonPay"] }
    ];

    const toggleSelectedMethod = (method) => {
        setSelectedMethod(selectedMethod === method ? null : method);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log("Submitted payment method:", selectedMethod);
        console.log("Form data:", formData);
        onSetDefault(selectedMethod.type);
        onClose();
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? "block" : "hidden"}`}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full p-4">
                <div className="text-center custom-modal px-8 pt-6 pb-4">
                    <h2 className="text-xl font-medium mb-2">{t("PaymentMethods")}</h2>
                    <div className="mb-6">
                        {paymentMethods.map((method) => (
                            <div key={method.id} className="flex items-center justify-between border-b pb-2">
                                <div className="flex items-center" onClick={() => toggleSelectedMethod(method)}>
                                    <div className="mr-2 text-xl icon-color">
                                        {method.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{method.type}</h3>
                                        <p className="text-gray-600">{method.details}</p>
                                    </div>
                                </div>
                                <Button size="small" onClick={() => toggleSelectedMethod(method)}>
                                    {t(selectedMethod === method ? "Unselect" : "Select")}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                {selectedMethod && (
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">{selectedMethod.type} {t("Form")}</h3>
                        <form>
                            {selectedMethod.fields.map((field, index) => (
                                <div key={index} className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field}>
                                        {t(field)}
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id={field}
                                        name={field}
                                        type={field === "expirationDate" ? "text" : "email"}
                                        placeholder={field === "expirationDate" ? "MM/YYYY" : ""}
                                        value={formData[field]}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            ))}
                        </form>
                        <div className="text-center mt-4">
                            <Button onClick={handleSubmit}>{t("Submit")}</Button>
                        </div>
                    </div>
                )}

                <div className="text-center mt-4">
                    <Button layout="outline" onClick={onClose}>
                        {t("modalKeepBtn")}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethods;

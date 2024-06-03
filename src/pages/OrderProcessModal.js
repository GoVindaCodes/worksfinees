// import React, { useState } from "react";
// import MobileOTPComponent from "./MobileOTPComponent";
// import AddressEntryComponent from "./AddressEntryComponent";
// import OrderSummaryComponent from "./OrderSummaryComponent";
// import PaymentMethods from "./PaymentMethods";
// import { t } from "i18next";
// import ProductServices from "services/ProductServices";
// import useAsync from "hooks/useAsync";
// import { Button } from "@windmill/react-ui";

// const OrderProcessModal = ({ id, onClose }) => {
//     const [submittedAddress, setSubmittedAddress] = useState("");
//     const [selectedComponent, setSelectedComponent] = useState("MobileOTPComponent");
//     const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
//     const { data, loading } = useAsync(() => ProductServices.getProductById(id));
//     const [defaultMethodDetails, setDefaultMethodDetails] = useState("");
//     const [paymentMethods, setPaymentMethods] = useState([]);

//     const handleAddressSubmit = (address) => {
//         setSubmittedAddress(address);
//         console.log("Submitted Address:", address);
//     };

//     const handleComponentChange = (component) => {
//         console.log("Changing component to:", component);
//         setSelectedComponent(component);
//     };

//     const handleOpenPaymentModal = () => {
//         setPaymentModalOpen(true);
//     };

//     const handleClosePaymentModal = () => {
//         setPaymentModalOpen(false);
//     };

//     const handleSetDefaultMethod = (details) => {
//         setDefaultMethodDetails(details);
//         handleClosePaymentModal();
//     };

//     return (
//         <div className="flex flex-col w-full rounded-lg">
//             <div className="flex-shrink-0 overflow-hidden flex items-center justify-center h-auto">
//                 {data && Array.isArray(data.image) && data.image.length > 0 ? (
//                     <div className="flex flex-row">
//                         {data.image.map((image, index) => (
//                             <img
//                                 key={index}
//                                 src={image}
//                                 alt={`product-${index}`}
//                                 className="h-64 w-64 mr-2"
//                             />
//                         ))}
//                     </div>
//                 ) : (
//                     <img
//                         src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
//                         alt="product"
//                         className="h-64 w-64"
//                     />
//                 )}
//             </div>
//             <div className="bg-white rounded-lg shadow-lg w-full relative">
//                 <div className="p-4">
//                     <div className="mb-4">
//                         <label className="block text-lg font-semibold mb-2">{t("Buy Now")}</label>
//                         <div className="flex flex-wrap gap-4">
//                             <button
//                                 className={`px-4 py-2 bg-gray-200 rounded-md ${selectedComponent === "MobileOTPComponent" ? "bg-blue-500 text-white" : ""}`}
//                                 onClick={() => handleComponentChange("MobileOTPComponent")}
//                             >
//                                 Mobile OTP
//                             </button>
//                             <button
//                                 className={`px-4 py-2 bg-gray-200 rounded-md ${isPaymentModalOpen ? "bg-blue-500 text-white" : ""}`}
//                                 onClick={handleOpenPaymentModal}
//                             >
//                                 Payment Methods
//                             </button>
//                             <button
//                                 className={`px-4 py-2 bg-gray-200 rounded-md ${selectedComponent === "AddressEntryComponent" ? "bg-blue-500 text-white" : ""}`}
//                                 onClick={() => handleComponentChange("AddressEntryComponent")}
//                             >
//                                 Address Entry
//                             </button>
//                             <button
//                                 className={`px-4 py-2 bg-gray-200 rounded-md ${selectedComponent === "OrderSummaryComponent" ? "bg-blue-500 text-white" : ""}`}
//                                 onClick={() => handleComponentChange("OrderSummaryComponent")}
//                             >
//                                 Order Summary
//                             </button>
//                         </div>
//                     </div>
//                     {selectedComponent === "MobileOTPComponent" && <MobileOTPComponent />}
//                     {selectedComponent === "AddressEntryComponent" && <AddressEntryComponent onSubmit={handleAddressSubmit} id={id} submittedAddress={submittedAddress} />}
//                     {selectedComponent === "OrderSummaryComponent" && (
//                         <OrderSummaryComponent
//                             id={id}
//                             selectedPaymentMethod={defaultMethodDetails}
//                             selectedAddress={submittedAddress}
//                             address={submittedAddress}
//                             data={data}
//                         />
//                     )}
//                     {isPaymentModalOpen && (
//                         <div className="fixed inset-0 flex items-center justify-center z-50">
//                             <div className="absolute inset-0 bg-black opacity-50"></div>
//                             <div className="absolute inset-0 flex items-center justify-center">
//                                 <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-4">
//                                     <PaymentMethods
//                                         isOpen={isPaymentModalOpen}
//                                         onClose={handleClosePaymentModal}
//                                         paymentMethods={paymentMethods}
//                                         onSetDefault={handleSetDefaultMethod}
//                                         id={id} />
//                                     <Button className="mt-4" onClick={handleClosePaymentModal}>Close</Button>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OrderProcessModal;









^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ revert when not working

import React, { useState } from "react";
import MobileOTPComponent from "./MobileOTPComponent";
import AddressEntryComponent from "./AddressEntryComponent";
import OrderSummaryComponent from "./OrderSummaryComponent";
import PaymentMethods from "./PaymentMethods";
import { t } from "i18next";
import ProductServices from "services/ProductServices";
import useAsync from "hooks/useAsync";
import { Button } from "@windmill/react-ui";

const OrderProcessModal = ({ id, onClose }) => {
    const [submittedAddress, setSubmittedAddress] = useState("");
    const [selectedComponent, setSelectedComponent] = useState("MobileOTPComponent");
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
    const { data, loading } = useAsync(() => ProductServices.getProductById(id));
    const [defaultMethodDetails, setDefaultMethodDetails] = useState("");
    const [paymentMethods, setPaymentMethods] = useState([]);

    const handleAddressSubmit = (address) => {
        setSubmittedAddress(address);
        console.log("Submitted Address:", address);
    };

    const handleComponentChange = (component) => {
        console.log("Changing component to:", component);
        setSelectedComponent(component);
    };

    const handleOpenPaymentModal = () => {
        setPaymentModalOpen(true);
    };

    const handleClosePaymentModal = () => {
        setPaymentModalOpen(false);
    };

    const handleSetDefaultMethod = (details) => {
        setDefaultMethodDetails(details);
        handleClosePaymentModal();
    };

    return (
        <div className="flex flex-col w-full rounded-lg">
            <div className="flex-shrink-0 overflow-hidden flex items-center justify-center h-auto">
                {data && Array.isArray(data.image) && data.image.length > 0 ? (
                    <div className="flex flex-row">
                        {data.image.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`product-${index}`}
                                className="h-64 w-64 mr-2"
                            />
                        ))}
                    </div>
                ) : (
                    <img
                        src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                        alt="product"
                        className="h-64 w-64"
                    />
                )}
            </div>
            <div className="bg-white rounded-lg shadow-lg w-full relative">
                <div className="p-4">
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">{t("Buy Now")}</label>
                        <div className="flex flex-wrap gap-4">
                            <button
                                className={`px-4 py-2 bg-gray-200 focus:outline-none rounded-md ${selectedComponent === "MobileOTPComponent" ? "bg-blue-500 text-white" : ""}`}
                                onClick={() => handleComponentChange("MobileOTPComponent")}
                            >
                                Mobile OTP
                            </button>
                            <button
                                className={`px-4 py-2 bg-gray-200 rounded-md focus:outline-none ${isPaymentModalOpen ? "bg-blue-500 text-white" : ""}`}
                                onClick={handleOpenPaymentModal}
                            >
                                Payment Methods
                            </button>
                            <button
                                className={`px-4 py-2 bg-gray-200  focus:outline-none  rounded-md ${selectedComponent === "AddressEntryComponent" ? "bg-blue-500 text-white" : ""}`}
                                onClick={() => handleComponentChange("AddressEntryComponent")}
                            >
                                Address Entry
                            </button>
                            <button
                                className={`px-4 py-2 bg-gray-200 focus:outline-none rounded-md ${selectedComponent === "OrderSummaryComponent" ? "bg-blue-500 text-white" : ""}`}
                                onClick={() => handleComponentChange("OrderSummaryComponent")}
                            >
                                Order Summary
                            </button>
                        </div>
                    </div>
                    {selectedComponent === "MobileOTPComponent" && <MobileOTPComponent />}
                    {selectedComponent === "AddressEntryComponent" && <AddressEntryComponent onSubmit={handleAddressSubmit} id={id} submittedAddress={submittedAddress} />}
                    {selectedComponent === "OrderSummaryComponent" && (
                        <OrderSummaryComponent
                            id={id}
                            selectedPaymentMethod={defaultMethodDetails}
                            selectedAddress={submittedAddress}
                            address={submittedAddress}
                            data={data}
                        />
                    )}
                    {isPaymentModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-4">
                                    <PaymentMethods
                                        isOpen={isPaymentModalOpen}
                                        onClose={handleClosePaymentModal}
                                        paymentMethods={paymentMethods}
                                        onSetDefault={handleSetDefaultMethod}
                                        id={id} />
                                    <Button className="mt-4" onClick={handleClosePaymentModal}>Close</Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderProcessModal;

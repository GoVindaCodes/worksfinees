// import React, { useState } from "react";
// import { Input, Button } from "@windmill/react-ui";

// const AddressEntryComponent = ({ isOpen, onClose, onSubmit, submittedAddress }) => {
//     const [address, setAddress] = useState(submittedAddress || "");
//     const [submitted, setSubmitted] = useState(!!submittedAddress);
//     const [editing, setEditing] = useState(false);

//     const handleAddressChange = (e) => {
//         setAddress(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Submitting address:", address);
//         onSubmit(address);
//         setSubmitted(true);
//         setEditing(false); // Once submitted, disable editing mode
//     };

//     const handleEdit = () => {
//         setEditing(true); // Enable editing mode
//     };

//     return (
//         <div>
//             <h3 className="text-lg font-semibold mb-4">Address Entry</h3>
//             {!submitted || editing ? (
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <Input type="textarea" value={address} onChange={handleAddressChange} placeholder="Enter Address" />
//                     <Button type="submit">Submit Address</Button>
//                     {/* <Button layout="outline" onClick={onClose}>Close</Button> */}
//                 </form>
//             ) : (
//                 <div>
//                     <p>Submitted Address: {address}</p>
//                     <Button onClick={handleEdit}>Edit Address</Button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AddressEntryComponent;



// import React, { useState } from "react";
// import { Input, Button } from "@windmill/react-ui";
// import ProductServices from "services/ProductServices";
// import useAsync from "hooks/useAsync";

// const AddressEntryComponent = ({ id, isOpen, onClose, onSubmit, submittedAddress }) => {
//     const [address, setAddress] = useState(submittedAddress || "");
//     const [submitted, setSubmitted] = useState(!!submittedAddress);
//     const [editing, setEditing] = useState(false);
//     const { data, loading } = useAsync(() => ProductServices.getProductById(id));
//     console.log("datas ", data?.address)
//     const handleAddressChange = (e) => {
//         setAddress(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Submitting address:", address);
//         try {
//             await ProductServices.addAddress(address, id);
//             onSubmit(address);
//             setSubmitted(true);
//             setEditing(false);
//         } catch (error) {
//             console.error("Error updating address:", error);
//         }
//     };

//     const handleEdit = () => {
//         setEditing(true); // Enable editing mode
//     };

//     return (
//         <div>
//             <h3 className="text-lg font-semibold mb-4">Address Entry</h3>
//             {!submitted || editing ? (
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <Input type="textarea" value={address} onChange={handleAddressChange} placeholder="Enter Address" />
//                     <Button type="submit">Submit Address</Button>
//                 </form>
//             ) : (
//                 <div>
//                     <p>Submitted Address: {address}</p>
//                     <Button onClick={handleEdit}>Edit Address</Button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AddressEntryComponent;

// import React, { useState, useEffect } from "react";
// import { Input, Button } from "@windmill/react-ui";
// import ProductServices from "services/ProductServices";
// import useAsync from "hooks/useAsync";

// const AddressEntryComponent = ({ id, isOpen, onClose, onSubmit, submittedAddress }) => {
//     const [address, setAddress] = useState(submittedAddress || "");
//     const [submitted, setSubmitted] = useState(!!submittedAddress);
//     const [editing, setEditing] = useState(false);
//     const { data, loading, error, reload } = useAsync(() => ProductServices.getProductById(id));

//     useEffect(() => {
//         setAddress(submittedAddress || "");
//     }, [submittedAddress]);

//     const handleAddressChange = (e) => {
//         setAddress(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Submitting address:", address);
//         try {
//             await ProductServices.addAddress(address, id);
//             onSubmit(address);
//             setSubmitted(true);
//             setEditing(false);
//         } catch (error) {
//             console.error("Error updating address:", error);
//         }
//     };

//     const handleEdit = () => {
//         setEditing(true);
//         setAddress(data?.address);
//     };

//     const handleCancelEdit = () => {
//         setEditing(false);
//         setAddress(data?.address);
//     };

//     return (
//         <div>
//             <h3 className="text-lg font-semibold mb-4">Address Entry</h3>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : error ? (
//                 <p>Error: {error.message}</p>
//             ) : (
//                 <div>
//                     {editing ? (
//                         <form onSubmit={handleSubmit} className="space-y-4">
//                             <Input type="textarea" value={address} onChange={handleAddressChange} placeholder="Enter Address" />
//                             <Button type="submit" className="mr-2">Submit Address</Button>
//                             <Button onClick={handleCancelEdit}>Cancel</Button>
//                         </form>
//                     ) : (
//                         <div>
//                             <p>Submitted Address: {submittedAddress}</p>
//                             <Button onClick={handleEdit}>Edit Address</Button>
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AddressEntryComponent;



// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Revert when not workings at all




import React, { useState, useEffect } from "react";
import { Input, Button, Label } from "@windmill/react-ui";
import ProductServices from "services/ProductServices";
import useAsync from "hooks/useAsync";

const AddressEntryComponent = ({ id, isOpen, onClose, onSubmit, submittedAddress }) => {
    const [address, setAddress] = useState(submittedAddress || {
        street: "",
        city: "",
        state: "",
        country: "",
        pincode: ""
    });
    const [submitted, setSubmitted] = useState(!!submittedAddress);
    const [editing, setEditing] = useState(true);
    const { data, loading, error, reload } = useAsync(() => ProductServices.getProductById(id));
    const [pincodeError, setPincodeError] = useState("");

    useEffect(() => {
        setAddress(submittedAddress || {
            street: "",
            city: "",
            state: "",
            country: "",
            pincode: ""
        });
    }, [submittedAddress]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress({
            ...address,
            [name]: value
        });
    };

    const validatePincode = (pincode) => {
        const pincodePattern = /^[0-9]{6}$/;
        return pincodePattern.test(pincode);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validatePincode(address.pincode)) {
            setPincodeError("Invalid pincode. It must be a 6-digit number.");
            return;
        }
        setPincodeError("");
        console.log("Submitting address:", address);
        try {
            await ProductServices.addAddress(address, id);
            onSubmit(address);
            setSubmitted(true);
            setEditing(false);
        } catch (error) {
            console.error("Error updating address:", error);
        }
    };

    const handleEdit = () => {
        setEditing(true);
        setAddress(data?.address || {
            street: "",
            city: "",
            state: "",
            country: "",
            pincode: ""
        });
    };

    const handleCancelEdit = () => {
        setEditing(false);
        setAddress(data?.address || {
            street: "",
            city: "",
            state: "",
            country: "",
            pincode: ""
        });
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Address Entry</h3>
            {loading ? (
                <p className="text-center text-gray-600">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-600">Error: {error.message}</p>
            ) : (
                <div>
                    {editing ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <Label className="block">
                                    <span className="text-gray-700">Street Address</span>
                                    <Input
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        name="street"
                                        type="text"
                                        value={address.street}
                                        onChange={handleChange}
                                        placeholder="Street Address"
                                    />
                                </Label>
                                <Label className="block">
                                    <span className="text-gray-700">City</span>
                                    <Input
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        name="city"
                                        type="text"
                                        value={address.city}
                                        onChange={handleChange}
                                        placeholder="City"
                                    />
                                </Label>
                                <Label className="block">
                                    <span className="text-gray-700">State</span>
                                    <Input
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        name="state"
                                        type="text"
                                        value={address.state}
                                        onChange={handleChange}
                                        placeholder="State"
                                    />
                                </Label>
                                <Label className="block">
                                    <span className="text-gray-700">Country</span>
                                    <Input
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        name="country"
                                        type="text"
                                        value={address.country}
                                        onChange={handleChange}
                                        placeholder="Country"
                                    />
                                </Label>
                                <Label className="block">
                                    <span className="text-gray-700">Pincode</span>
                                    <Input
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                        name="pincode"
                                        type="text"
                                        value={address.pincode}
                                        onChange={handleChange}
                                        placeholder="Pincode"
                                    />
                                    {pincodeError && <p className="text-red-600 mt-1">{pincodeError}</p>}
                                </Label>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <Button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700">
                                    Submit Address
                                </Button>
                                <Button onClick={handleCancelEdit} className="bg-gray-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-700">
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <div className="space-y-4">
                            <div className="text-lg">
                                <p className="font-semibold">Submitted Address:</p>
                                <p>Street: {submittedAddress.street}</p>
                                <p>City: {submittedAddress.city}</p>
                                <p>State: {submittedAddress.state}</p>
                                <p>Country: {submittedAddress.country}</p>
                                <p>Pincode: {submittedAddress.pincode}</p>
                            </div>
                            <Button onClick={handleEdit} className="bg-green-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700">
                                Edit Address
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AddressEntryComponent;


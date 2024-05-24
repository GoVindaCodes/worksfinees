import React from "react";
import useAsync from "hooks/useAsync";
import ProductServices from "services/ProductServices";

const OrderSummaryComponent = ({ id, address, selectedPaymentMethod, selectedAddress }) => {
    const { data, loading } = useAsync(() => ProductServices.getProductById(id));

    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2">
                <div>
                    <span className="font-medium">Product:</span>{" "}
                    <span>{data?.title || "N/A"}</span>
                </div>
                <div>
                    <span className="font-medium">Shipping Address:</span>{" "}
                    <span>{selectedAddress || ""}</span>
                </div>
                <div>
                    <span className="font-medium">Selected Payment Method:</span>{" "}
                    <span>{selectedPaymentMethod || ""}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummaryComponent;

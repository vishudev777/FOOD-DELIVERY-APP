import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext.jsx";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        try {
            console.log("Verifying payment...");
            console.log("Success:", success, "Order ID:", orderId);

            const response = await axios.post(url + "/api/order/verify", {
                success,
                orderId,
            });

            console.log("API Response:", response.data);

            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Error verifying payment:", error);
            navigate("/");
        }
    };

    useEffect(() => {
        verifyPayment();
    }, []);

    return (
        <div className="verify">
            <div className="spinner"></div>
        </div>
    );
};

export default Verify;

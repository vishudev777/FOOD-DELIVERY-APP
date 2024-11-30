import { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets.js";
import { StoreContext } from "../../context/StoreContext.jsx";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext);

    const [currState, setCurrState] = useState("Login");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
    };

    // const onLogin = async (event) => {
    //     event.preventDefault();

    //     let newUrl = url;
    //     if (currState === "Login") {
    //         newUrl += "/api/users/login";
    //     } else {
    //         newUrl += "/api/users/register";
    //     }

    //     const response = await axios.post(newUrl, data);

    //     if (response.data.success) {
    //         setToken(response.data.token);
    //         localStorage.setItem("token", response.data.token);
    //         setShowLogin(false);
    //     } else {
    //         alert(response.data.message); // or use a toast notification library for better user experience
    //     }
    // };

    const onLogin = async (event) => {
        event.preventDefault();

        // Build the URL based on the current state
        let newUrl = url;
        if (currState === "Login") {
            newUrl += "/api/users/login";
        } else {
            newUrl += "/api/users/register";
        }

        try {
            // Log the constructed URL for debugging
            console.log("Making POST request to:", newUrl);
            console.log("Payload being sent:", data);

            // Make the POST request
            const response = await axios.post(newUrl, data);

            // Check the response
            if (response.data.success) {
                console.log("Login/Register successful:", response.data);

                // Save the token and update the state
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setShowLogin(false);
            } else {
                console.error("Error response:", response.data);
                alert(response.data.message); // Inform the user of the failure
            }
        } catch (error) {
            // Log the error for debugging
            console.error("Request failed:", error);

            // Provide user-friendly feedback
            if (error.response) {
                // The request was made, and the server responded with an error code
                alert(
                    `Error: ${error.response.status} - ${error.response.data}`
                );
            } else if (error.request) {
                // The request was made, but no response was received
                alert(
                    "Error: No response from server. Check if the backend is running."
                );
            } else {
                // Something else went wrong
                alert(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div className="login-popup">
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                    />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? (
                        <></>
                    ) : (
                        <input
                            name="name"
                            onChange={onChangeHandler}
                            value={data.name}
                            type="text"
                            placeholder="Your Name"
                            required
                        />
                    )}

                    <input
                        name="email"
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder="Your Email"
                        required
                    />
                    <input
                        name="password"
                        onChange={onChangeHandler}
                        value={data.password}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit">
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>
                        By Clicking, i agree to the Trems of use & privacy
                        policy
                    </p>
                </div>
                {currState === "Login" ? (
                    <p>
                        Create new account?{" "}
                        <span style={{ marginLeft: "4px" }}></span>
                        <span onClick={() => setCurrState("Sign Up")}>
                            Click here
                        </span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span style={{ marginLeft: "4px" }}></span>
                        <span onClick={() => setCurrState("Login")}>
                            Login here
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;

// import { useContext, useEffect, useState } from "react";
// import "./Navbar.css";
// import { assets } from "../../assets/frontend_assets/assets";
// import { Link, useNavigate } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext.jsx";

// const Navbar = ({ setShowLogin }) => {
//     const [menu, setMenu] = useState("home");
//     const [showNavbar, setShowNavbar] = useState(true); // State for showing/hiding navbar
//     const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

//     let lastScrollTop = 0;

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop =
//                 window.pageYOffset || document.documentElement.scrollTop;

//             if (scrollTop > lastScrollTop) {
//                 setShowNavbar(false); // Scrolling down: hide navbar
//             } else {
//                 setShowNavbar(true); // Scrolling up: show navbar
//             }

//             lastScrollTop = scrollTop;
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const navigate = useNavigate();

//     const logout = () => {
//         localStorage.removeItem("token");
//         setToken("");
//         navigate("/");
//     };

//     return (
//         <div className="navbar" style={{ top: showNavbar ? "0" : "-70px" }}>
//             <Link to="/">
//                 <img src={assets.logo} alt="" className="logo" />
//             </Link>
//             <ul className="navbar-menu">
//                 <Link
//                     to="/"
//                     onClick={() => setMenu("home")}
//                     className={menu === "home" ? "active" : ""}
//                 >
//                     home
//                 </Link>
//                 <a
//                     href="#explore-menu"
//                     onClick={() => setMenu("menu")}
//                     className={menu === "menu" ? "active" : ""}
//                 >
//                     menu
//                 </a>
//                 <a
//                     href="#app-download"
//                     onClick={() => setMenu("mobile-app")}
//                     className={menu === "mobile-app" ? "active" : ""}
//                 >
//                     mobile-app
//                 </a>
//                 <a
//                     href="#footer"
//                     onClick={() => setMenu("contact-us")}
//                     className={menu === "contact-us" ? "active" : ""}
//                 >
//                     contact-us
//                 </a>
//             </ul>
//             <div className="navbar-right">
//                 <img src={assets.search_icon} alt="search icon" />
//                 <div className="navbar-search-icon">
//                     <Link to="/cart">
//                         <img src={assets.basket_icon} alt="basket icon" />
//                     </Link>
//                     <div
//                         className={getTotalCartAmount() === 0 ? "" : "dot"}
//                     ></div>
//                 </div>
//                 {!token ? (
//                     <button onClick={() => setShowLogin(true)}>sign in</button>
//                 ) : (
//                     <div className="navbar-profile">
//                         <img src={assets.profile_icon} alt="profile_icon" />
//                         <ul className="nav-profile-dropdown">
//                             <li onClick={() => navigate("/myorder")}>
//                                 <img src={assets.bag_icon} alt="bag-icon" />
//                                 <p>Orders</p>
//                             </li>
//                             <hr />
//                             <li onClick={logout}>
//                                 <img
//                                     src={assets.logout_icon}
//                                     alt="logout_icon"
//                                 />
//                                 <p>Logout</p>
//                             </li>
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    return (
        <div className="navbar">
            <Link to="/">
                <img src={assets.new_logo} alt="" className="logo" />
            </Link>
            <ul className="navbar-menu">
                <Link
                    to="/"
                    onClick={() => setMenu("home")}
                    className={menu === "home" ? "active" : ""}
                >
                    HOME
                </Link>
                <a
                    href="#explore-menu"
                    onClick={() => setMenu("menu")}
                    className={menu === "menu" ? "active" : ""}
                >
                    MENU
                </a>
                <a
                    href="#app-download"
                    onClick={() => setMenu("mobile-app")}
                    className={menu === "mobile-app" ? "active" : ""}
                >
                    MOBILE-APP
                </a>
                <a
                    href="#footer"
                    onClick={() => setMenu("contact-us")}
                    className={menu === "contact-us" ? "active" : ""}
                >
                    CONTACT-US
                </a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search icon" />
                <div className="navbar-cart-icon">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="cart icon" />
                    </Link>
                    <div
                        className={getTotalCartAmount() === 0 ? "" : "dot"}
                    ></div>
                </div>
                {!token ? (
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                ) : (
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} alt="profile_icon" />
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate("/myorders")}>
                                <img src={assets.bag_icon} alt="bag-icon" />
                                <p>Orders</p>
                            </li>
                            <hr />
                            <li onClick={logout}>
                                <img
                                    src={assets.logout_icon}
                                    alt="logout_icon"
                                />
                                <p>Logout</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;

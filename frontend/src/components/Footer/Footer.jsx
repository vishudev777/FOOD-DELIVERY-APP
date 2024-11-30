import { assets } from "../../assets/frontend_assets/assets.js";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.new_logo} />
                    <p>
                        OUR VISION - Delivering fresh, delicious meals quickly,
                        with a goal to be your go-to food delivery service
                    </p>
                    <div className="footer-social-icons">
                        <a href="https://www.instagram.com" target="_blank">
                            <img src={assets.facebook_icon} alt="Instagram" />
                        </a>
                        <a href="https://www.x.com" target="_blank">
                            <img src={assets.twitter_icon} alt="" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank">
                            <img src={assets.linkedin_icon} alt="" />
                        </a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>HOME</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-9969551405</li>
                        <li>contact@menu.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 Menu.com - All rights reserved.
            </p>
            <p className="footer-love-message">
                Made with 💖 by vikas lokhande from
                <img src={assets.indian_flag} alt="flag" />
            </p>
        </div>
    );
};

export default Footer;

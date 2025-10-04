import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import '../../assets/styles/Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-top">
                <div className="footer-column contact-column">
                    <h2 className="footer-logo"><Link to="">3legant.</Link></h2>
                    <p className="footer-tagline">More than just a game.
                        <br />It’s a lifestyle.</p>

                    <div className="social-icons-container">
                        <a href="https://www.instagram.com"><FaInstagram /></a>
                        <a href="https://www.facebook.com/"> <FaFacebook /></a>
                        <a href="https://www.youtube.com/"> <FaYoutube /></a>
                    </div>
                </div>

                <div className="footer-column">
                    <h3 className="column-title">Page</h3>

                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/allproducts/">Products</Link></li>
                        <li><Link to="/allproducts">Shop</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/about">Abut</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="column-title">Info</h3>
                    <ul className="footer-links">
                        <li><Link to="/shipping">Shipping Policy</Link></li>
                        <li><Link to="/return">Return & Refund</Link></li>
                        <li><Link to="/support">Support</Link></li>
                        <li><Link to="/faqs">FAQs</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="column-title">Office</h3>
                    <ul className="footer-links">
                        <li>43111 Hai Trieu street,</li>
                        <li>District 1, HCMC</li>
                        <li>Vietnam</li>
                        <li>84-756-3237</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="copyright-text">Copyright © 2023 3legant. All rights reserved</p>
                <div className="policy-links">
                    <Link to="/privacy">Privacy Policy</Link>
                    <span className="divider">|</span>
                    <Link to="/terms">Terms & Conditions</Link>
                </div>

                {/* هنا أضفنا صور وسائل الدفع */}
                <div className="payment-icons">
                    <img src="/src/assets/Images/photo_5_2025-09-24_16-58-40.jpg" alt="Visa" />
                    <img src="/src/assets/Images/photo_4_2025-09-24_16-58-40.jpg" alt="American Express" />
                    <img src="/src/assets/Images/photo_2_2025-09-24_16-58-40.jpg" alt="Stripe" />
                    <img src="/src/assets/Images/photo_1_2025-09-24_16-58-40.jpg" alt="PayPal" />
                    <img src="/src/assets/Images/photo_3_2025-09-24_16-58-40.jpg" alt="Apple Pay" />
                    <img src="/src/assets/Images/photo_6_2025-09-24_16-58-40.jpg" alt="American Express" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
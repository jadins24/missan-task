import React from "react";
import './footer.scss'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-container">
            <div className="footer-card res-w">
                    <h1>LOGO</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                    <h4>Get Social With Us</h4>
                    <div className="footer-icons">
                        <div className="footer-icon facebook">
                            <i className="fa fa-facebook"></i>
                        </div>
                        <div className="footer-icon pinterest">
                            <i className="fa fa-pinterest-p"></i>
                        </div>
                        <div className="footer-icon twitter">
                            <i className="fa fa-twitter"></i>
                        </div>
                        <div className="footer-icon instagram">
                            <i className="fa fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="quick-links res-w">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href=''>About Us</a></li>
                        <li><a href=''>Services</a></li>
                        <li><a href=''>Pricing</a></li>
                        <li><a href=''>Contact</a></li>
                    </ul>
                </div>
                <div className="usefull-links res-w">
                    <h4>Useful Links</h4>
                    <ul>    
                        <li><a href=''>Privacy Policy</a></li>
                        <li><a href=''>Terms and Conditions</a></li>
                        <li><a href=''>Disclaimer</a></li>
                        <li><a href=''>Support</a></li>
                        <li><a href=''>Support</a></li>
                        <li><a href=''>FAQ</a></li>
                    </ul>
                </div>
                <div className="address res-w">
                    <h3>Address</h3>
                     <a href="#"> <i class="fa fa-map-marker" aria-hidden="true"></i>Address</a>
                     <a href="#"><i class="fa fa-envelope-o" aria-hidden="true"></i>abc@gmail.com</a>
                     <a href="#"><i class="fa fa-phone" aria-hidden="true"></i>+91 9876543210</a>

                </div>
                
            </div>
        </div>
    );
}

export default Footer;  
import React from "react";
import "../styles/Footer.css";
import BrowzlyBear from "../assets/images/logos/Splash-bear.png";
import BrowzlyLogo from "../assets/images/icons/browzly-logo-icon.png";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src= {BrowzlyBear} alt="Browzly Logo" className="footer-logo-img bear" />
            <img src= {BrowzlyLogo} alt="Browzly Logo" className="footer-logo-img" />
          </div>
          
          <div className="footer-links">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Case Study</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Browzly App</a></li>
              <li><a href="#">Phonic Bear</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>
  
          <div className="footer-office">
            <h4>Registered Office</h4>
            <p>Browzly Ltd 71-75 Shelton Street</p>
            <p>Covent Garden, London WC2H9JQ</p>
          </div>
  
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/browzly/posts/?feedView=all"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.facebook.com/Browzly/"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/browzly/?hl=en"><i className="fab fa-instagram"></i></a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fbrowzly"><i className="fab fa-x"></i></a>
          </div>
        </div>
  
        <hr className="footer-divider" />
  
        <div className="footer-bottom">
          <p>Copyright © 2024 Browzly. All Rights Reserved.</p>
          <div className="footer-policy">
            <a href="https://phonicbear.browzly.com/privacy-terms/terms-of-service">Terms of Use</a>
            <a href="">Cookies Policy</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;

  
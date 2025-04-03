import logo from "../assets/images/icons/browzly-logo-icon.png";
import whatsappIcon from "../assets/images/logos/whatsapp.svg";
import "../styles/navbar.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Left-aligned Logo */}
        <a href="/" className="navbar-brand">
          <img src={logo} alt="browzly" className="logo" />
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right-aligned Nav Links, WhatsApp Icon & Button */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarText">
          <ul className="navbar-nav d-flex gap-4 align-items-center">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Phonic Bear
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>

            {/* WhatsApp Icon */}
            <li className="nav-item">
              <a href="https://api.whatsapp.com/send?phone=+447984949509" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="whatsapp" className="whatsapp-icon" />
              </a>
            </li>

            {/* Talk to Us Button */}
            <li className="nav-item">
              <button className="btn btn-warning rounded-5 px-3">Talk to us</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;







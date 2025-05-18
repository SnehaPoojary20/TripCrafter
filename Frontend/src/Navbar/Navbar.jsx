import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { GiWavyItinerary } from "react-icons/gi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
    return (
      <>
        <nav className="navbar bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><b>TripCrafter</b></Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><b>Explore</b></h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/"><IoHome className="icons" /> Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/itinerary"><GiWavyItinerary /> Itinerary</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/destinations"><MdOutlineTravelExplore /> Destinations</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/map"><FaMapMarkedAlt /> Map</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about"><IoIosInformationCircle /> About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/chatbot"><TbMessageChatbotFilled /> ChatBot</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout"><IoIosLogOut /> Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
};

export default Navbar;

  
  
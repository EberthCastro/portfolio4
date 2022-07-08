import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./navbar.css"


const Navbar = () => {
  const navRef = useRef();

    const showNavbar = () => {
          navRef.current.classList.toggle("responsive_nav");
    }
    return (
      <div className="nav">
         <header className="navbar">
            <h2 className="logo">ICC</h2>
            <nav ref={navRef} className="links">
                <a href="/#">Home</a>
                <a href="/#">About me</a>
                <a href="/#">Project</a>
                <a href="/#">Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                  <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars/>
            </button>
        </header> 
         
      </div>
    )
  }
  
  export default Navbar
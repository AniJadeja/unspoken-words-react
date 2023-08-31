import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from '../Assets/logo.svg'

const NavigationBar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className="mt-12">
        <div className="align-center text-white">
          <Link to="/" className="" onClick={closeMobileMenu}>
            <img src={Logo} className="h-[41px] w-auto mr-[50px]" />
          </Link>

          <ul >
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? " activated" : "")
                }

              >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/aboutme"
                className={({ isActive }) => (isActive ? " activated" : "")
                }
              >About Me</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/avocations"
                className={({ isActive }) => (isActive ? " activated" : "")
                }

              >Avocations</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Projects"
                className={({ isActive }) => (isActive ? " activated" : "")
                }

              >Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Resume"
                className={({ isActive }) => (isActive ? " activated" : "")
                }

              >Resume</NavLink>
            </li>
          </ul>
          {/* <div className="align-center" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div> */}
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;

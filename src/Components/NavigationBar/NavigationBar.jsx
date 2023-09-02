import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from '../../Assets/logo.svg'
import { projectName } from "../../index";
import { CgMenuRightAlt, CgClose } from "react-icons/cg"
import { BurgerClose }
  from "react-burger-icons";
import './NavStyle.css';

const NavigationBar = () => {

  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  let windowWidth = window.innerWidth;


  const [isClosed, setIsClosed] = useState(false);

  return (
    <>
      <nav id="desktopNavigation" className="mt-12">
        <div className="nav-header align-center">
          <Link to="/" className="flex" onClick={closeMobileMenu}>
            <img src={Logo} className="block h-[41px] w-auto mr-[20px]" />
            {/*tailwind is built using mobile first approach. So on mobile devices i need to show the project names, but anything above lg breakpoint, i do need my app name to be visible.*/}
            <p className="text-xl lg:hidden ease-in-out duration-300 align-center text-white">{projectName}</p>
          </Link>

          <ul className="hidden lg:block ease-in-out duration-300">
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





      <nav id="mobileNavigation" className=" mx-8 flex md:hidden  justify-center">
        {/*Menu Control Button*/}

        <div className="fixed right-0 bottom-11 h-12 w-12 bg-[var(--color-menu-gray)] rounded-s-xl z-50">
          <div className="flex justify-center items-center h-full " onClick={() => {
            setIsClosed(!isClosed)
            console.log(isClosed)
          }}>
            <BurgerClose isClosed={isClosed} />
          </div>
        </div>

        {/*Bottom Navigation Menu*/}

        <div className={"nav-header align-mobile bg-[var(--color-menu-gray)] rounded-s-full z-0 transition-transform transform " + (!isClosed ? "translate-x-full" : "translate-x-10")}>
          
            <ul className="flex first:ml-4 last:mr-20 overflow-x-auto">
              <li className="nav-item-mobile align-center">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? " activated" : "")
                  }

                >Home</NavLink>
              </li>
              <li className="nav-item-mobile align-center">
                <NavLink
                  to="/aboutme"
                  className={({ isActive }) => (isActive ? " activated" : "")
                  }
                >About Me</NavLink>
              </li>
              <li className="nav-item-mobile align-center">
                <NavLink
                  to="/avocations"
                  className={({ isActive }) => (isActive ? " activated" : "")
                  }

                >Avocations</NavLink>
              </li>
              <li className="nav-item-mobile align-center">
                <NavLink
                  to="/Projects"
                  className={({ isActive }) => (isActive ? " activated" : "")
                  }

                >Projects</NavLink>
              </li>
              <li className="nav-item-mobile align-center">
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

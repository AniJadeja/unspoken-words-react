import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from '../../Assets/logo.svg'
import { projectName } from "../../index";
import { BurgerClose }
  from "react-burger-icons";
import './NavStyle.css';

const NavigationBar = () => {


  const [isClosed, setIsClosed] = useState(false);
  const closeMobileMenu = () => setIsClosed(false); 

  return (
    <section id="middleNavigationBar">
      <nav id="desktopNavigation" className="mt-10 mb-6">
        <div className="nav-header align-center">
          <Link to="/" className="flex" onClick={
            //closes the menu when clicked on the logo
            closeMobileMenu}>
            <img src={Logo} className="block h-[41px] w-auto mr-[20px]" />
            {/*tailwind is built using mobile first approach. So on mobile devices i need to show the project names, but anything above lg breakpoint, i do need my app name to be visible.*/}
            <p className="text-xl lg:hidden ease-in-out duration-300 align-center text-white">{projectName}</p>
          </Link>
          
          {/* Normally the menu is hidden. But will be visible after lg breakpoint. Only the entries are hidden and not the navbar. The logo and projectName is still visible.  */}
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
          
        </div>
      </nav>





      <nav id="mobileNavigation" className=" mx-8 flex lg:hidden  justify-center">
        {/*Menu Control Button*/}

        <div className="fixed right-0 bottom-11 h-12 w-12 bg-[var(--color-menu-gray)] rounded-s-xl z-20">
          <div className="flex justify-center items-center h-full " onClick={() => {
            setIsClosed(!isClosed)
            console.log(isClosed)
          }}>
            <BurgerClose isClosed={isClosed} />
          </div>
        </div>

        {/*Bottom Navigation Menu*/}

        <div className={"nav-header align-mobile bg-[var(--color-menu-gray)] rounded-s-full z-10 transition-transform transform md:-mr-16 " + (!isClosed ? "translate-x-full" : "translate-x-10")
        /* The translate property moves the navbar from offscreen to onscreen and again to offscreen. */
      
      }>
          
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
          </div>
  
      </nav>


    </section>
  );
};

export default NavigationBar;

import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const {logOutUser, user} = useContext(AuthContext)



  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 bg-white mb-3 drop-shadow-xl">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              to="/"
            >
              <img className="object-scale-down h-6 w-20" src={process.env.PUBLIC_URL + "/pvs_vlogo.png"} alt="logo"/>
            </NavLink>
          


            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavHashLink smooth to="/#icons" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                  <span className="ml-2">Leistungen</span>
                </NavHashLink>

              </li>

              <li className="nav-item">
              <NavHashLink smooth to="/#team" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                  <span className="ml-2">Team</span>
              </NavHashLink>
              </li>

              <li className="nav-item">
              <NavHashLink smooth to="/#partner" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                  <span className="ml-2">Partner</span>
              </NavHashLink>
              </li>

              <li className="nav-item">
              <Link  to="/blog" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                  <span className="ml-2">Bloggen</span>
              </Link>
              </li>

              <li className="nav-item">
              <NavHashLink smooth to="/#contact" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                  <span className="ml-2 underline">Kontakt</span>
              </NavHashLink>
              </li>

              {user &&
              <> 
              <li>
              <Link  to="/admin/dashboard" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" >
                  <span className="ml-2">Dashboard</span>
              </Link>
              </li>

              <li>
              <button className=" hover:bg-red-700 bg-pink text-white text-xs md:ml-5 md:mt-1 p-1 px-2 rounded m-0" onClick={logOutUser}>Log Out</button>
              </li>
              </>
              }


            </ul>
            
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;


import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";
import { MdMenu, MdClose } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { useAuth0 } from "@auth0/auth0-react"
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const [active, setActive] = React.useState(false);
  const [menuOpened, setMenuOpened] = React.useState(false);
  const toggleMenu = (prev) => {
    setMenuOpened((prev) => !prev);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // close the menu if open when scroll occurs
        if (menuOpened) {
          setMenuOpened(false);
        }
      }
      // detect scroll
      setActive(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    // clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpened]); //effect will run only when menuOpened changes

  const {loginWithRedirect, isAuthenticated, user, logout} = useAuth0()

  return (
    <header
      className={`${
        active ? "!py-1 bg-white shadow-md" : "!py-2"
      } !py-2 max-padd-container fixed top-0 w-full left-0 right-0 z-50 transition-all duration-200`}>
      {/* Container */}
      <div className="flexBetween">
        {/* Logo */}
        <div>
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="h-16 py-2" />
          </Link>
        </div>
        {/* Navbar */}
        <div className="flexCenter gap-x-4">
          {/* DESKTOP */}
          <Navbar
            containerStyles={
              "hidden xl:flex gap-x-5 xl:gap-x-12 capitalize text-base font-medium"
            }
          />
          {/* MOBILE */}
          <Navbar
            containerStyles={`${
              menuOpened
                ? "flex items-center flex-col gap-y-8 capitalize fixed top-20 right-8 p-12 bg-white shadow-md rounded-2xl w-64 text-base font-medium ring-1 ring-stale-900/5 transition-all duration-300 z-50 "
                : "lex items-center flex-col gap-y-8 capitalize fixed top-20 -right-[100%] p-12 bg-white shadow-md rounded-2xl w-64 text-base font-medium ring-1 ring-stale-900/5 transition-all duration-300"
            }`}
          />
        </div>
        {/* BUTTONS */}
        <div className="flexBetween gap-x-3 sm:gap-x-5 bold-16">
          {!menuOpened ? (
            <MdMenu
              onClick={toggleMenu}
              className="xl:hidden cursor-pointer text-3xl "
            />
          ) : (
            <MdClose
              onClick={toggleMenu}
              className="xl:hidden cursor-pointer text-3xl"
            />
          )}
          { !isAuthenticated ? <button
            onClick={loginWithRedirect} className="flexCenter gap-x-2 !px-2 btn-dark "
            >
            <LuUserRound className="text-xl" />
            <span>Log In</span>
            </button> : <ProfileMenu user={user} logout={logout} />
          }
        </div>
      </div>
    </header>
  );
};

export default Header;

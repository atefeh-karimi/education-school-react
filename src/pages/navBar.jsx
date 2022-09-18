import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Logo from "../component/Logo";
import "./navBarStyle.css";
import { useRef } from "react";

library.add(faTimes, faBars);

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const showMenu = () => {
    navRef.current.classList.toggle("show-menu");
    setIsOpen(!isOpen);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "window-scroll" : ""}>
      <div className="container nav__container">
        <Logo />

        <ul className="nav__menu" ref={navRef}>
          <li>
            <Link className="linkStyle" to="/">
              خانه
            </Link>
          </li>

          <li>
            <Link className="linkStyle" to="/Courses">
              دوره آموزشی
            </Link>
          </li>

          <li>
            <Link className="linkStyle" to="/Contact">
              ارتباط باما
            </Link>
          </li>

          <li>
            <Link className="linkStyle" to="/About">
              درباره ما
            </Link>
          </li>
        </ul>
        <button onClick={showMenu}>
          {isOpen ? (
            <FontAwesomeIcon icon="bars" />
          ) : (
            <FontAwesomeIcon icon="times" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;

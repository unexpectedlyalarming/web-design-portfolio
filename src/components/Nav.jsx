"use client";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
  const [hidden, setHidden] = useState(true);

  function toggleMenu() {
    setHidden(!hidden);
  }

  const ulClassName = hidden ? "mobile-hidden" : "";

  const links = (
    <>
      <li>
        <a className="nav-link " href="/">
          Home
        </a>
      </li>
      <li>
        <a className="nav-link" href="/portfolio">
          Portfolio
        </a>
      </li>
      <li>
        <a className="nav-link" href="/pricing">
          Pricing
        </a>
      </li>
      <li>
        <a className="nav-link" href="/faq">
          FAQ
        </a>
      </li>
      <li>
        <a className="nav-link" href="/contact">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav>
      <button className="mobile-menu-button btn" onClick={toggleMenu}>
        <MenuIcon />
      </button>
      <ul className={ulClassName}>{links}</ul>
    </nav>
  );
}

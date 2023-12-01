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
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/portfolio">Portfolio</a>
      </li>
      <li>
        <a href="/pricing">Pricing</a>
      </li>
      <li>
        <a href="/faq">FAQ</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
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

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <Link to="">Challenge1</Link>
      <Link to="challenge2">Challenge2</Link>
      <Link to="challenge3">Challenge3</Link>
    </header>
  );
}

export default Header;

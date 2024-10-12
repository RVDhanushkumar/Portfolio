// components/header.js
import React from 'react';
import { Link } from 'react-scroll';
import "../Styling/header.css";
import pic from "../assets/DK logo.png";

function Header() {
  const options = [
    { name: "Home", to: "firstPage" },
    { name: "Projects", to: "works" },
    { name: "About me", to: "aboutMe" },
    { name: "Skills", to: "skills" }
  ];


  const list = options.map(option => (
    <li key={option.to}>
      <Link to={option.to} smooth={true} duration={500}>
        {option.name}
      </Link>
    </li>
  ));

  return (
    <div className="main_head">
      <img className="logo" alt="Logo" src={pic} />
      <div className="option">
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default Header;

import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
const Navbar = () => {
  const scrollToHome = () => {
    navigate('/')
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToInterestingFacts = () => {
    navigate("/");
    sessionStorage.setItem("navigatedToAboutPage", true);
    document
      .getElementById("interesting--facts--section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();
  return (
    <nav className="navbar--class">
      <h1>World Atlas</h1>
      <div className="navbar--class--lists">
        <p onClick={() => scrollToHome()}>Home</p>
        <p onClick={() => scrollToInterestingFacts()}>About</p>
        <p onClick={()=>navigate('/countries')}>Countries</p>
        <p>Contact</p>
      </div>
    </nav>
  );
};

export default Navbar;

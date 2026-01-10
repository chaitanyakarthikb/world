import React from "react";

const Navbar = () => {
  const scrollToHome = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToInterestingFacts = () => {
    document
      .querySelector("#interesting--facts--section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="navbar--class">
      <h1>World Atlas</h1>
      <div className="navbar--class--lists">
        <p onClick={() => scrollToHome()}>Home</p>
        <p onClick={() => scrollToInterestingFacts()}>About</p>
        <p>Country</p>
        <p>Contact</p>
      </div>
    </nav>
  );
};

export default Navbar;

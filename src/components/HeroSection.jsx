import React from "react";

const HeroSection = () => {
  return (
    <section id="hero--section" className="hero--section">
      <div className="hero--section--content">
        <h1>Explore the world, One country at a time.</h1>
        <p>
          Discover the history, culture, and beauty of every nation. Sort,
          search, and filter through countries to find the details you need.
        </p>
        <button>Start exploring</button>
      </div>

      <div className="hero--section--img">
        <img src="/worldatlas.jpg" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;

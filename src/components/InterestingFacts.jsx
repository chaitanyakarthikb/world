import React, { useEffect } from "react";
import InterestingFactsBoxes from "./InterestingFactsBoxes";

const InterestingFacts = () => {
  const checkingSessionRegNavigation = sessionStorage.getItem('navigatedToAboutPage');
  useEffect(() => {
    if(checkingSessionRegNavigation === "false"){
      window.scroll({top:0,left:0,behavior:"smooth"})
    }else if (checkingSessionRegNavigation === "true") {
      document
        .getElementById("interesting--facts--section")
        ?.scrollIntoView({ behavior: "smooth" });
        sessionStorage.setItem('navigatedToAboutPage',false)
    }
  }, [
  ]);
  
  return (
    <div id="interesting--facts--section" className="interestingfacts">
      <InterestingFactsBoxes />
    </div>
  );
};

export default InterestingFacts;

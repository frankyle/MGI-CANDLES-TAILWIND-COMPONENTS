import React from "react";
import RightUpperHero from "./RightUpperHero";
import { RightLowerHero } from "./RightLowerHero";

const RightHero = () => {
  return (
    <div className="space-y-4"> {/* Adds spacing between components */}
      <RightUpperHero />
      <RightLowerHero />
    </div>
  );
};

export default RightHero;

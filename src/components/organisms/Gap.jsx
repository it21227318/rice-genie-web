import React from "react";
import PrimaryText from "../atoms/Text";
import { researchGapData } from "../../constants/ResearchGap";

function Gap() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {researchGapData.heading}
        </h2>
        <PrimaryText text={researchGapData.introText} />
        
      </div>
    </section>
  );
}

export default Gap;

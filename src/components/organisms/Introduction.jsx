import React from "react";
import PrimaryTypo from "../atoms/Headings";
import { IntroductionData } from "../../constants/Intro";

const Introduction = () => {
  return (
    <section id="intro" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <PrimaryTypo text={IntroductionData.heading} />
        <p className="text-gray-700 text-lg mb-8 text-justify">
          {IntroductionData.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
      </div>
    </section>
  );
};

export default Introduction;

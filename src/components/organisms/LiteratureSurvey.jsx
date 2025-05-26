import React from "react";
import PrimaryTypo from "../atoms/Headings";
import { literatureSurveyData } from "../../constants/LitSurvey";

const LiteratureSurvey = () => {
  return (
    <section id="survey" className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <PrimaryTypo text={literatureSurveyData.heading} />
        <p className="text-gray-700 text-lg mb-8 text-justify">
          {literatureSurveyData.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
      </div>
    </section>
  );
};

export default LiteratureSurvey;

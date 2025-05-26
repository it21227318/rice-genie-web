import React from "react";
import PrimaryTypo from "../atoms/Headings";
import { objectivesData } from "../../constants/Objectives";

const Objectives = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <PrimaryTypo text="Research Objectives" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectivesData.map((objective, index) => {
            const title = objective.title || "Untitled Objective";
            const description =
              objective.description || "No description available.";

            return (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {title}
                </h3>
                <p className="text-lg text-gray-600">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Objectives;

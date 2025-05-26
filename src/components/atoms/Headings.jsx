import React from "react";

const PrimaryTypo = ({ text }) => {
  return (
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
      {text}
    </h1>
  );
};

export const SecondaryTypo = ({ text }) => {
  return <h2 className="text-2xl font-semibold text-gray-800 mb-6">{text}</h2>;
};

export default PrimaryTypo;


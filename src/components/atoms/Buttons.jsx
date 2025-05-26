import React from "react";

export const PrimaryButton = ({ text, link }) => {
  return (
    <a
      href={link}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
      download
    >
      {text}
    </a>
  );
};

export const ButtonLink = ({ text, link, className = "" }) => {
  return (
    <a
      href={link}
      className={`bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-lg transition ${className}`}
    >
      {text}
    </a>
  );
};

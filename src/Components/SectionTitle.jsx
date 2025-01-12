import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="flex xl:max-w-xl mx-auto flex-col justify-center items-center">
      <p className="text-orange-400 text-lg">{heading}</p>
      <div className="divider my-1"></div>
      <p className="text-5xl font-semibold">{subHeading}</p>
      <div className="divider my-1"></div>
    </div>
  );
};

export default SectionTitle;

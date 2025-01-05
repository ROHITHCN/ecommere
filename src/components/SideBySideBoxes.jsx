import React from "react";

const SideBySideBoxes = ({ boxes,heading }) => {
  return (
    <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-medium text-center py-6">{heading}</h2>
        <div className="flex justify-between gap-6">
        {boxes.map((box, index) => (
        <div key={index} className="flex-1">
          {/* Image section */}
          <a href={box.link} className="block">
            <img
              src={box.image}
              alt={box.title}
              className="w-full h-96 object-cover cursor-pointer"
            />
          </a>
          {/* Blue box section */}
          <div className="bg-[#0A2647] text-white p-4">
            <p className="font-bold text-lg">{box.title}</p>
            <p className="text-m mt-2">{box.description}</p>
            <a
              href={box.link}
              className="text-m mt-4 text-white underline font-semibold block cursor-pointer"
            >
              Shop Now
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SideBySideBoxes;
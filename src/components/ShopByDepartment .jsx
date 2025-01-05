import React from "react";

import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';
import c5 from '../assets/c5.png';
import c6 from '../assets/c6.png';

const ShopByDepartment = () => {
  const departments = [
    { title: "Ceiling Lights", image: c1 },
    { title: "Outdoor Lighting", image: c2 },
    { title: "Ceiling Fans", image: c3 },
    { title: "LED Mirrors", image: c4 },
    { title: "Wall Lighting", image: c5 },
    { title: "Bath Lights", image: c6 },
  ];
  return (
    <div className="mt-8 w-11/12 mx-auto">
      {/* Updated heading for boldness and larger font */}
      <h2 className="text-3xl font-extrabold mb-8 text-center">
        Shop by Department
      </h2>
      {/* Flex container for circles */}
      <div className="flex flex-wrap justify-start gap-0">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
            style={{ width: "calc(100% / 6)" }} // Adjust circle width based on the number of items
          >
            <a
              href="#"
              className="font-medium text-base transition-colors duration-200 hover:text-gray-500 hover:underline"
            >
              {dept.title}
            </a>
            {/* Circle with thicker border */}
            <a
              href="#"
              // className="w-52 h-52 rounded-full overflow-hidden border-[16px] border-[16px] border-gray-300"
              className="w-52 h-52 rounded-full overflow-hidden"
            >
              <img
                src={dept.image}
                alt={dept.title}
                className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByDepartment;

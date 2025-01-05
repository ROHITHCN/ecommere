import React from 'react'

import c11 from '../assets/c11.png';
import c12 from '../assets/c12.png';
import c13 from '../assets/c13.png';
import c14 from '../assets/c14.png';
import c15 from '../assets/c15.png';
import c16 from '../assets/c16.png';

const ShopByRoom = () => {
    const departments = [
        { title: "Ceiling Lights", image: c11 },
        { title: "Outdoor Lighting", image: c12 },
        { title: "Ceiling Fans", image: c13 },
        { title: "LED Mirrors", image: c14 },
        { title: "Wall Lighting", image: c15 },
        { title: "Bath Lights", image: c16 },
      ];
      return(
      <div className="mt-8 w-11/12 mx-auto">
       {/* Updated heading for boldness and larger font */}
       <h2 className="text-xl font-bold mb-6 text-center">Shop by Room</h2>
       {/* Flex container for circles */}
       <div className="flex flex-wrap justify-center">
         {departments.map((dept, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-1/6"
          >
             <a
              href="#"
              className="mt-2 font-medium text-m transition-colors duration-200 hover:text-gray-500 hover:underline"
            >
              {dept.title}
            </a>
            {/* Make the image clickable */}
            <a
              href="#"
              className="w-44 h-44 rounded-full overflow-hidden"
            >
              <img
                src={dept.image}
                alt={dept.title}
                className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
              />
            </a>
            {/* Make the title hover effect and clickable */}
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopByRoom
// import React from "react";

// const OurExpertsPicks = () => {
//   return (
//     <div className="py-6 bg-orange-100 text-center">
//       <h2 className="text-xl text-orange-300 font-bold mb-4">
//         Our Expert’s Picks - Best of the Best
//       </h2>
//       <p className="text-gray-700 mb-4">
//         Check out our hand-selected products and why we think you'll love them!
//       </p>
//       <a
//         href="#"
//         className="bg-orange-300 hover:bg-orange-600 text-white py-2 px-4 rounded"
//       >
//         VIEW PRODUCTS
//       </a>
//     </div>
//   );
// };

// export default OurExpertsPicks;
import React from "react";

import { TbStars } from "react-icons/tb"; // Replace with your cropped PNG image
import { FaArrowRight } from "react-icons/fa"; // For the right arrow icon

const OurExpertsPicks = () => {
  return (
    <div className="py-8 bg-orange-100 text-center">
      {/* Title with PNG beside it */}
      <h2 className="text-3xl text-orange-400 font-bold mb-4 flex justify-center items-center gap-3">
        <span><TbStars/></span>
        <span>Our Expert’s Picks - Best of the Best</span>
      </h2>

      {/* Subtitle */}
      <p className="text-lg text-gray-800 mb-6">
        Check out our hand-selected products and why we think you'll love them!
      </p>

      {/* Button with right arrow */}
      <a
        href="#"
        className="bg-orange-400 hover:underline text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 w-fit mx-auto"
      >
        <span>VIEW PRODUCTS</span>
        <FaArrowRight />
      </a>
    </div>
  );
};

export default OurExpertsPicks;

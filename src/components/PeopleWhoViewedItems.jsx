// import React from "react";

// import Kichler from '../assets/Kichler.png';
// import progress from '../assets/progress.png';
// import gold from '../assets/gold.png';
// import cryst from '../assets/cryst.png';

// const PeopleWhoViewedItems = () => {
//   const products = [
//     { name: "Savoy House", price: "XAV-B8311", image: cryst },
//     { name: "Savoy House", price: "3164-FM", image: gold },
//     { name: "Hinkley Lighting", price: "P4217", image: progress },
//     { name: "Kichler Lighting", price: "44033", image: Kichler },
//   ];

//   return (
//     <div className="py-8 mx-auto w-11/12">
//       <h2 className="text-2xl font-bold text-center mb-8">
//         People Who Viewed Items You Browsed Also Viewed
//       </h2>
//       <div className="flex justify-center gap-8 flex-wrap">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="text-center flex flex-col items-center"
//             style={{ width: "250px" }} // Increased width for better visibility
//           >
//             {/* Image */}
//             <a href="#" className="block">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-64 h-48 object-cover cursor-pointer" // Increased image dimensions
//               />
//             </a>
//             {/* Product Name */}
//             <a href="#" className="block mt-4 font-semibold text-gray-800 hover:underline">
//               {product.name}
//             </a>
//             {/* Product Price */}
//             <p className="text-gray-600 mt-1 hover:underline">{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PeopleWhoViewedItems;

import React from "react";

import Kichler from '../assets/Kichler.png';
import progress from '../assets/progress.png';
import gold from '../assets/gold.png';
import cryst from '../assets/cryst.png';

const PeopleWhoViewedItems = () => {
  const products = [
    { name: "Savoy House", price: "XAV-B8311", image: cryst },
    { name: "Savoy House", price: "3164-FM", image: gold },
    { name: "Hinkley Lighting", price: "P4217", image: progress },
    { name: "Kichler Lighting", price: "44033", image: Kichler },
  ];

  return (
    <div className="py-8 mx-auto w-10/12 border-t-4 border-b-4 border-gray-300">
      <h2 className="text-2xl font-bold text-center mb-8">
        People Who Viewed Items You Browsed Also Viewed
      </h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {products.map((product, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center"
            style={{ width: "250px" }} // Increased width for better visibility
          >
            {/* Image */}
            <a href="#" className="block">
              <img
                src={product.image}
                alt={product.name}
                className="w-64 h-48 object-cover cursor-pointer" // Increased image dimensions
              />
            </a>
            {/* Product Name */}
            <a href="#" className="block mt-4 font-semibold text-gray-800 hover:underline">
              {product.name}
              <br/>
              {product.price}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleWhoViewedItems;

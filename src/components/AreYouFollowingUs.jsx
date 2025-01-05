// import yotpo from '../assets/yotpo.png'; // Ensure correct path to the image
// import React from "react";

// const FollowUs = () => {
//   return (
//     <div
//       className="relative w-full bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${yotpo})`, // Replace with your image URL
//         height: "400px", // Adjust the height of the image
//       }}
//     >
//       <div
//         className="absolute top-6 left-6 bg-white bg-opacity-90 w-10/12 lg:w-5/12 p-8 rounded-md shadow-lg"
//         style={{ minHeight: "200px" }} // Adjust white box height
//       >
//         {/* Heading */}
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Are You Following Us?</h2>

//         {/* Description */}
//         <p className="text-gray-700 mb-6 leading-relaxed">
//           Check out the latest home lighting and decor trends, <br />
//           new arrivals, and much more!{" "}
//           <span className="font-bold text-black">#1stoplove</span>
//         </p>

//         {/* Social Media Buttons */}
//         <div className="flex gap-3">
//           <a
//             href="#"
//             className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-400"
//           >
//             Instagram
//           </a>
//           <a
//             href="#"
//             className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-400"
//           >
//             Facebook
//           </a>
//           <a
//             href="#"
//             className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-400"
//           >
//             Pinterest
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FollowUs;

// import follow from '../assets/follow.png'; // Ensure correct path to the image
// import React from "react";

// const FollowUs = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${follow})`, // Replace with your image URL
//         height: "400px", // Adjust the height of the image
//       }}
//     >
//       <div
//         className="absolute top-12 left-12 lg:w-6/12 p-8 shadow-lg"
//         style={{
//           minHeight: "290px", // Adjust box height
//           backgroundColor: "rgba(255, 255, 255, 1)", // White with 70% opacity
//         }}
//       >
//         {/* Heading */}
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Are You Following Us?</h2>

//         {/* Description */}
//         <p className="text-gray-700 mb-6 leading-relaxed">
//           Check out the latest home lighting and decor trends, <br />
//           new arrivals, and much more!{" "}
//           <span className="font-bold text-black">#1stoplove</span>
//         </p>

//         {/* Social Media Buttons */}
//         <div className="flex gap-3">
//           <a
//             href="#"
//             className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-400"
//           >
//             Instagram
//           </a>
//           <a
//             href="#"
//             className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-400"
//           >
//             Facebook
//           </a>
//           <a
//             href="#"
//             className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-400"
//           >
//             Pinterest
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FollowUs;

import follow from '../assets/follow.png'; // Ensure correct path to the image
import React from "react";

const FollowUs = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${follow})`, // Replace with your image URL
        height: "400px", // Adjust the height of the image
      }}
    >
      <div
        className="absolute top-12 left-12 lg:w-6/12 p-8 shadow-lg flex flex-col justify-center items-center text-center"
        style={{
          minHeight: "290px", // Adjust box height
          backgroundColor: "rgba(255, 255, 255, 1)", // White with 100% opacity
        }}
      >
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Are You Following Us?</h2>

        {/* Description */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          Check out the latest home lighting and decor trends, <br />
          new arrivals, and much more!{" "}
          <span className="font-bold text-black">#1stoplove</span>
        </p>

        {/* Social Media Buttons */}
        <div className="flex gap-3">
          <a
            href="#"
            className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-400"
          >
            Instagram
          </a>
          <a
            href="#"
            className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-400"
          >
            Facebook
          </a>
          <a
            href="#"
            className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-400"
          >
            Pinterest
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;

// import React from "react";

// import yotpo from '../assets/yotpo.png';
// import sitejabber from '../assets/sitejabber.png';
// import trustpilot from '../assets/trustpilot.png'


// const TrustedByThousands = () => {
//   const trustedData = [
//     {
//       title: "yotpo.",
//       image: yotpo, // Replace with the actual path
//       customers: "from 9,200 customers",
//     },
//     {
//       title: "sitejobber",
//       image: sitejabber, // Replace with the actual path
//       customers: "from 8,275 customers",
//     },
//     {
//       title: "Trustpilot",
//       image: trustpilot, // Replace with the actual path
//       customers: "from 11,872 customers",
//     },
//   ];

//   return (
//     <div className="text-center py-6 bg-white">
//       <h2 className="text-2xl text-gray-600 font-bold mb-6">Trusted by Thousands</h2>
//       <div className="flex justify-center gap-6 flex-wrap w-11/12 mx-auto">
//         {trustedData.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center"
//             style={{ width: "300px" }} // Set a fixed width for each item
//           >
//             {/* Image */}
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-24 object-contain mb-2" // Adjust height and make width responsive
//             />
//             {/* Text Box */}
//             <div className="bg-white p-4 w-full">
//               {/* <p className="text-lg font-bold text-gray-800">{item.title}</p> */}
//               <p className="mt-1 text-black font-bold">{item.customers}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrustedByThousands;

import React from "react";

import yotpo from '../assets/yotpo.png';
import sitejabber from '../assets/sitejabber.png';
import trustpilot from '../assets/trustpilot.png';

const TrustedByThousands = () => {
  const trustedData = [
    {
      title: "yotpo.",
      image: yotpo,
      customers: "from 9,200 customers",
    },
    {
      title: "sitejobber",
      image: sitejabber,
      customers: "from 8,275 customers",
    },
    {
      title: "Trustpilot",
      image: trustpilot,
      customers: "from 11,872 customers",
    },
  ];

  return (
    <div className="text-center py-8 bg-white">
      <h2 className="text-2xl text-gray-600 font-bold mb-8">Trusted by Thousands</h2>
      <div className="flex justify-center gap-8 flex-wrap w-11/12 mx-auto">
        {trustedData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            style={{ width: "350px" }} // Increased the width of each box
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-contain mb-4" // Increased height and width
            />
            {/* Text Box */}
            <div className="bg-white p-4 w-full">
              <p className="mt-1 text-black font-bold">{item.customers}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedByThousands;

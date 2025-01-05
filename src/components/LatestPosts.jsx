// import React from "react";

// import protip from '../assets/protip.png'
// import style from '../assets/style.png'
// import learn from '../assets/learn.png'

// const LatestPosts = () => {
//   const posts = [
//     {
//       id: 1,
//       image: protip, // Replace with your cropped image
//       category: "PRO TIPS",
//       title: "Kitchen Lighting for Vaulted Ceilings",
//       link: "#",
//     },
//     {
//       id: 2,
//       image: style, // Replace with your cropped image
//       category: "STYLE SPOTLIGHT",
//       title: "Mid-Century Modern Lighting Ideas",
//       link: "#",
//     },
//     {
//       id: 3,
//       image: learn, // Replace with your cropped image
//       category: "LEARN",
//       title: "Bathroom Vanity Lighting",
//       link: "#",
//     },
//   ];

//   return (
//     <div className="p-8">
//       {/* Section Heading */}
//       <h2 className="text-2xl font-bold text-center mb-8">Our Latest Posts</h2>

//       {/* Post Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {posts.map((post) => (
//           <a
//             key={post.id}
//             href={post.link}
//             className="group block text-center"
//           >
//             {/* Image */}
//             <div className="overflow-hidden rounded-lg ">
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>

//             {/* Category */}
//             <p className="mt-4 text-sm font-semibold text-gray-500 uppercase">
//               {post.category}
//             </p>

//             {/* Title */}
//             <p
//               className="mt-2 text-lg font-semibold text-gray-800 group-hover:underline"
//             >
//               {post.title}
//             </p>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestPosts;

import React from "react";

import protip from '../assets/protip.png';
import style from '../assets/style.png';
import learn from '../assets/learn.png';

const LatestPosts = () => {
  const posts = [
    {
      id: 1,
      image: protip, // Replace with your cropped image
      category: "PRO TIPS",
      title: "Kitchen Lighting for Vaulted Ceilings",
      link: "#",
    },
    {
      id: 2,
      image: style, // Replace with your cropped image
      category: "STYLE SPOTLIGHT",
      title: "Mid-Century Modern Lighting Ideas",
      link: "#",
    },
    {
      id: 3,
      image: learn, // Replace with your cropped image
      category: "LEARN",
      title: "Bathroom Vanity Lighting",
      link: "#",
    },
  ];

  return (
    <div className="p-8">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold text-center mb-8">Our Latest Posts</h2>

      {/* Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            className="group block"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Category */}
            <p className="mt-4 text-sm font-semibold text-gray-500 uppercase text-left">
              {post.category}
            </p>

            {/* Title */}
            <p
              className="mt-2 text-lg font-semibold text-gray-800 group-hover:underline text-left"
            >
              {post.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;

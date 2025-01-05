import React from "react";

const SearchTags = ({ tags }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg mx-auto w-11/12">
      <h2 className="text-lg font-bold mb-4 text-center">
        People are Searching for...
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {tags.map((tag, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-white text-sm font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchTags;

import React from "react";

const Crousel = () => {
  return (
    <div className="h-56 w-11/12 mx-auto flex justify-center items-center">
      <div className="grid grid-cols-11 gap-4 text-center">
      <a
          href="#PlugAndPlay"
          className="text-black font-bold hover:text-gray-400 hover:underline"
        >
          Brands
        </a>
        <a
          href="#PlugAndPlay"
          className="text-black font-bold hover:text-gray-400 hover:underline"
        >
          Plug & Play
        </a>
        <a
          href="#CeilingLights"
          className="text-black font-bold hover:text-gray-400 hover:underline"
        >
          Ceiling Lights
        </a>
        <a
          href="#Chandeliers"
          className="text-black font-bold hover:text-gray-400 hover:underline"
        >
          Chandeliers
        </a>
        <a
          href="#WallLights"
          className="text-black font-bold hover:text-gray-400 hover:underline"
        >
          Wall Lights
        </a>
        <a
          href="#Outdoor"
          className="text-black font-bold hover:text-gray-400 hover:underline"
        >
          Outdoor
        </a>
        <a
          href="#CeilingFans"
          className="text-black font-bold hover:text-gray-400 hover:underline"
        >
          Ceiling Fans
        </a>
        <a
          href="#ShopByRoom"
          className="text-Blue-900 font-bold hover:text-Blue-600 hover:underline"
        >
          Shop by Room
        </a>
        <a
          href="#New"
          className="text-Blue-900 font-bold hover:text-Blue-600 hover:underline"
        >
          New
        </a>
        <a
          href="#Learn"
          className="text-Blue-900 font-bold hover:text-Blue-600 hover:underline"
        >
          Learn
        </a>
        <a
          href="#Sale"
          className="text-orange-400 font-bold hover:text-Grey-400 hover:underline"
        >
          Sale
        </a>
      </div>
    </div>
  );
};

export default Crousel;

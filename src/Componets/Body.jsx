import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img
          src="./public/assets/Blue-Shape.svg"
          alt="1st"
          className="-rotate-45 h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./public/assets/Pink-Shape.svg"
          alt="2nd"
          className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./public/assets/Purple-Shape.svg"
          alt="3rd"
          className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="./public/assets/Hero-Model.png"
          alt="model"
          className="absolute h-64 md:h-72 lg:h-[400px]"
        />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight">
          Hello Welcome to our website.Make website on 5 minutes.
        </h1>
        <p className="font-lato text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          eveniet vero fugiat nihil dignissimos ipsa ea provident in
          consequuntur, sunt aliquam libero vel perferendis repudiandae quae
          vitae, nobis, hic dicta.
        </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter email address"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-2">
          <img src="./assets/Checkmark.svg" alt="mark" />
          <p className="font-lato text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            molestiae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;

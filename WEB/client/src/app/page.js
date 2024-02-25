import React from "react";
import Navbar from "@/components/Navbar";
import Blueprintsubmit from "@/components/Blueprintsubmit";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Features2 />
      <Blueprintsubmit />
    </div>
  );
}

const Header = () => {
  return (
    <div className="relative border-2 border-black">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black">
        <div className="text-4xl ">Home Vision</div>
        <div className="text-2xl ">Visualize your House in 3D</div>
      </div>
      <img
        src="https://staticg.sportskeeda.com/editor/2022/12/61670-16708729693107-1920.jpg?w=840"
        alt="home vision"
        className="w-full"
      />
    </div>
  );
};

const Features = () => {
  return (
    <div className="flex flex-wrap my-10 justify-around">
      <div className="">
        <img src="./AR_model.png" alt="feature" className=" w-96 h-full " />
      </div>
      <div className="w-1/2 flex flex-col justify-center gap-10 ">
        <p className="bg-red-900 text-white p-2 ">Visualize your house in 3D 🏠</p>
        <p className="bg-green-500 text-white p-2 "> Your Blueprint is your marker 🗺️</p>
        <p className="bg-blue-900 text-white p-2 ">Cost estimation Plan 🗝️</p>
      </div>
    </div>
  );
};


const Features2 = () => {
  return (
    <div className="flex justify-around ">
      <div>
        <div>ALl</div>
        <div></div>
        <div></div>

        <div></div>
        
      </div>
      <div>
       <img src="./app.png" alt="app" />
      </div>
    </div>
)
}

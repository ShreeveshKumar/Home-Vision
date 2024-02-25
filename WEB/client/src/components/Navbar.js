import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-wrap justify-between bg-black text-white align-middle place-content-center p-5">
      <div className="flex place-content-center align-middle  ">Realityhex</div>

      <div className="flex gap-10 ">
        <div>About</div>
        <div>Contact</div>

        <div>Dashboard</div>
      </div>
    </div>
  );
};

export default Navbar;

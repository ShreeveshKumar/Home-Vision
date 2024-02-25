import React from "react";

const Info = () => {
  return (
    <div className="flex ">
      <div>Apartment 1</div>
      <div className="w-4/5 ">
        <form>
          <h1>enter the house owner name </h1>
          <input type="text" />

          <h1>enter the buffer time </h1>
          <input type="text" />

          <h1>enter the amount </h1>
          <input type="text" />

          <button>See Documents </button>
          <button>Save changes </button>
        </form>
      </div>
    </div>
  );
};

export default Info;

import React from "react";
import Cousin from "../Cousin/Cousin";

const Uncle = () => {
  return (
    <div className="p-2 border-2 rounded-lg border-amber-400">
      <h2 className="text-center">Uncle</h2>
      <div className="grid grid-cols-3 p-1 gap-4">
        <Cousin name={"Cousin-1"}></Cousin>
        <Cousin name={"Cousin-2"}></Cousin>
        <Cousin name={"Cousin-3"}></Cousin>
      </div>
    </div>
  );
};

export default Uncle;

import React, { createContext } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunt from "../Aunt/Aunt";

export const AssetContext = createContext("Gold");

const Grandfather = () => {
  const asset = "Gem";
  return (
    <div className="p-2 border-2 rounded-lg border-amber-400">
      <h2 className="text-center">Grandfather</h2>
      <AssetContext.Provider value="Gold">
        <div className="grid p-2 grid-cols-3 gap-4">
          <Father asset={asset}></Father>
          <Uncle></Uncle>
          <Aunt></Aunt>
        </div>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandfather;

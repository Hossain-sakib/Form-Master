import React from 'react';
import SpecialOne from '../SpecialOne/SpecialOne';

const Myself = ({asset}) => {
    return (
        <div className="p-2 border-2 rounded-lg border-amber-400">
        <h2 className="text-center">Myself</h2>
      <div className="grid grid-cols-1 p-1 gap-4">
        <SpecialOne asset={asset}></SpecialOne>
      </div>
    </div>
    );
};

export default Myself;
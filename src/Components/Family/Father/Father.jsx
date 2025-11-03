import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({asset}) => {
    return (
         <div className="p-2 border-2 rounded-lg border-amber-400">
        <h2 className="text-center">Father</h2>
      <div className="grid grid-cols-3 p-1 gap-4">
        <Myself asset={asset}></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </div>
    </div>
    );
};

export default Father;
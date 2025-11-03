import React, { useContext } from 'react';
import { AssetContext } from "../Grandfather/Grandfather";

const Cousin = ({name}) => {
      const gift = useContext(AssetContext);
    return (
        <div className='text-center p-2 border-2 rounded-lg border-amber-400 '>
           {name} {`got the ${gift} using useContext hook`}
        </div>
    );
};

export default Cousin;
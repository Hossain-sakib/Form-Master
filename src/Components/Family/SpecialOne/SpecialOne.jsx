import React from 'react';

const SpecialOne = ({asset}) => {
        return (
        <div className='text-center p-2 border-2 rounded-lg border-amber-400 '>
           Special One {`got the ${asset} using props drilling`}
        </div>
    );
};

export default SpecialOne;
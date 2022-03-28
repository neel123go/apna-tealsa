import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefit = ({ benefit }) => {
    return (
        <div>
            <h2 className='flex items-center mb-2'><CheckCircleIcon className='w-5 h-5 mr-1'></CheckCircleIcon> {benefit}</h2>
        </div>
    );
};

export default Benefit;
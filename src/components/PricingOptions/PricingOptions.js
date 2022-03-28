import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOptions = ({ option }) => {
    const { name, price, benefits } = option;
    return (
        <div className='bg-green-700 rounded-lg p-4 text-white'>
            <h2 className='text-2xl mb-5'>{name}</h2>
            <p className='mb-5'>
                <span className='text-5xl'>{price}</span>
                <span>/month</span>
            </p>
            <h2 className='text-2xl text-left mb-4'>Benefits</h2>
            {
                benefits.map(benefit => <Benefit key={Math.random()} benefit={benefit}></Benefit>)
            }
        </div>
    );
};

export default PricingOptions;
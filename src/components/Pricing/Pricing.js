import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const options = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                '5461', '1 user', '10 downloads per day', 'Daily content updates'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                '54642', '3 users', 'Unlimited downloads', 'Daily content updates', 'Fully-HD video'
            ]
        },
        {
            id: 3, name: 'Premium', price: 15.99, benefits: [
                '5463', '5 users', 'Unlimited downloads', 'Daily content updates', 'Fully-HD video', 'Browse with no ads'
            ]
        }
    ];
    return (
        <div>
            <h2 className='mt-1 text-xl tracking-wide'>Choose your best option</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:mt-10 py-5 px-8 sm:px-15 lg:px-36'>
                {
                    options.map(option => <PricingOptions key={option.id} option={option}></PricingOptions>)
                }
            </div>
        </div>
    );
};

export default Pricing;
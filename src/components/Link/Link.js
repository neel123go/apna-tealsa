import React from 'react';

const Link = ({ route }) => {
    const { path, name } = route;
    return (
        <li className='mb-3 mx-5'>
            <a className='text-green-600 text-lg' href={path}>{name}</a>
        </li>
    );
};

export default Link;
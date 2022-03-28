import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/home', },
        { id: 2, name: 'Shop', path: '/shop' },
        { id: 3, name: 'Cart', path: '/cart' },
        { id: 4, name: 'About Us', path: '/about' }
    ];
    return (
        <nav className='w-full bg-gray-200 py-3'>
            <div onClick={() => setOpen(!open)} className='text-green-500 w-10 h-10 md:hidden ml-3'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static bg-gray-200 w-full duration-500 ease-in ${open ? 'top-16' : 'top-[-150px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;
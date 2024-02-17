import React from 'react';
import Logo from '../assets/black.png'
import {Link} from 'react-scroll'

const Header = () => {
    return (
        <header className='py-8'>
        <div className='container
         mx-auto'>
            <div className='flex 
            justify-between items-start'>
                <a  href='#'>
                    <img className='w-24' src={Logo} alt=''/>
                </a>
            <Link to='contact'>
            <button className='btn btn-sm'>Work with me</button>
            </Link>
            </div>
        </div>
        </header>
    );
};

export default Header;
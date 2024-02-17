import React, { useState } from 'react';
import {BiClipboard, BiHome, BiHomeAlt, BiUser} from 'react-icons/bi';
import{BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareTextFill} from 'react-icons/bs';
import {Link} from 'react-scroll'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Nav = () => {

    const [tooltipText, setTooltipText] = useState('');

    const handleMouseEnter = (text) => {
      console.log("Mouse Enter:", text);
      setTooltipText(text);
    };
    
    const handleMouseLeave = () => {
      console.log("Mouse Leave");
      setTooltipText('');
    };
    
    return (
        <nav className='fixed bottom-2 lg:bottom-8 
        flex justify-center items-center overflow-hidden
         z-50 w-full'>
        <div className='container 
        mx-auto '>
            <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl 
            rounded-full max-w-[460px] mx-auto px-5 flex 
            justify-between items-center text-2xl text-white/50 '>
            <Link 
            to='home' 
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer flex justify-center
             items-center  text-2xl w-[60px] h-[60px] hover:text-white ' 
             onMouseEnter={() => handleMouseEnter('Home')}
             onMouseLeave={handleMouseLeave}>

            <BiHomeAlt/>

            </Link>


            <Link
             to='about'
             activeClass='active'
             smooth={true}
             spy={true}
            className='cursor-pointer flex justify-center
             items-center text-2xl w-[60px] h-[60px] hover:text-white'
             onMouseEnter={() => handleMouseEnter('About')}
             onMouseLeave={handleMouseLeave}>
            <BiUser/>


            </Link>




            <Link 
            title='Services'
            to='services'
            activeClass='active'
            smooth={true}
            spy={true}
             className='cursor-pointer flex justify-center
             items-center  text-2xl w-[60px] h-[60px] hover:text-white'
             onMouseEnter={() => handleMouseEnter('Services')}
             onMouseLeave={handleMouseLeave}>
            <BsClipboardData/>
            </Link>


            <Link 
            to='work'
            title='Work'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer flex justify-center
             items-center text-2xl w-[60px] h-[60px] hover:text-white'
             onMouseEnter={() => handleMouseEnter('Work')}
             onMouseLeave={handleMouseLeave}>
            <BsBriefcase/>

            </Link>



            <Link 
            title='Contact'
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
             className='cursor-pointer flex justify-center
             items-center text-2xl w-[60px] h-[60px] hover:text-white'
             onMouseEnter={() => handleMouseEnter('Contact')}
             onMouseLeave={handleMouseLeave}>
            <BsChatSquareTextFill/>
            </Link>
            {tooltipText && (
            <div className='tooltip'>
              {tooltipText}
              <div className='arrow'></div>
            </div>
          )}
            </div>
        </div>
        </nav>
    );
};
export default Nav;
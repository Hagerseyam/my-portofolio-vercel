import React from 'react';
import {motion} from 'framer-motion';
import{ fadeIn} from '../variant'
import Img1 from '../assets/portfolio-img1.jpg'
import Img2 from '../assets/portfolio-img2.jpg'
import { Link } from 'react-router-dom';
const Work = () => {


    return (
        <section className='section'
         id='work'>
            <div className='container
             mx-auto my-auto'>
                <div className='flex 
                flex-col lg:flex-row gap-x-10 '>

                    <div className='flex-1 flex flex-col gap-y-2 mb-10
                     lg:mb-0 mt-20
                    '
                    // variants={fadeIn('left' ,  0.3)}
                    // initial='hidden'
                    // whileInView={'show'}
                    // viewport={{once:false , amount:0.3}} 
                    >
                        <div>
                            <h2 className='h2 leading-light text-accent'>
                             My Latest<br/>
                             Work.
                            </h2>
                            <p className='max-w-sm
                             mb-10'>
                             
                             In my latest work, I designed visually appealing and user-friendly website templates, 
                             developed responsive interfaces using React, Redux Toolkit, and Next.js, and executed impactful 
                             digital marketing strategies, managing successful campaigns on MailChimp and crafting engaging social media content. 
                             </p>
                             <a className='p-4 btn
                              btn-sm' target="_blank" href="https://github.com/Hagerseyam"> 
                            View All Projects
                            </a>

                        </div>



                        {/* image */}
                        {/* <div className='group relative overflow-hidden
                         border-2 border-white/50 
                        rounded-xl '>
                             overlay 
                            <div className='group-hover:bg-black/70
                             w-full h-full absolute z-40
                            transition-all duration-300
                            '></div>
                            
                            image
                            <img className='group-hover:scale-125
                            transition-all duration-500 '
                            src={Img1} alt=''/>
                            
                            pretitle
                            <div className='absolute bottom-full left-12 
                            group-hover:bottom-24 transition-all duration-500
                             z-50'>
                               <span className='text-gradient'>UI/UX Design</span>

                            </div>

                             <div className='absolute bottom-full left-12 
                            group-hover:bottom-14 transition-all duration-700
                             z-50'>  

                             <span className='text-3xl text-white'>Vet Shop</span>
                             
                             </div>

                        </div> */}
                        
                    </div>


                 <motion.div className="flex-1 
                flex flex-col gap-y-2 mt-14 font-['Open_Sans'] "
                variants={fadeIn('right' ,  0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false , amount:0.3}}>

                        {/* image  */}
                        <div className='group relative overflow-hidden
                         border-2 border-white/50 
                        rounded-xl mb-2'>
                            {/* overlay */}
                            <div className='group-hover:bg-black/70
                             w-full h-full absolute z-40
                            transition-all duration-300
                            '></div>
                            
                            {/* image */}
                            <img className='group-hover:scale-125
                            transition-all duration-500 '
                            src={Img2} alt=''/>
                            
                            {/* pretitle */}
                            <div className='absolute bottom-full left-12 
                            group-hover:bottom-24 transition-all duration-500
                             z-50'>
                               <span className='text-gradient'>Web Development</span> 
                            </div>

                             <div className='absolute bottom-full left-12 
                            group-hover:bottom-14 transition-all duration-700
                             z-50'>  
                             <a href='https://www.linkedin.com/posts/hager-seyam-33961a24b_ecommercewebsite-reactjs-nodejs-activity-7158866617253187586-joAj?utm_source=share&utm_medium=member_desktop' className='text-3xl text-white'>E-commerce website</a></div>
                        </div>
                         {/* image  */}
                        <div className='group relative overflow-hidden
                         border-2 border-white/50 
                        rounded-xl'>
                            {/* overlay */}
                            <div className='group-hover:bg-black/70
                             w-full h-full absolute z-40
                            transition-all duration-300
                            '></div>
                            
                            {/* image */}
                            <img className='group-hover:scale-125
                            transition-all duration-500 '
                            src={Img1} alt=''/>
                            
                            {/* pretitle */}
                            <div className='absolute bottom-full left-12 
                            group-hover:bottom-24 transition-all duration-500
                             z-50'>
                               <span className='text-gradient'>UI/UX Design</span> 
                            </div>
                             <div className='absolute bottom-full left-12 
                            group-hover:bottom-14 transition-all duration-700
                             z-50'>  
                             <a href='https://www.figma.com/file/CFmD2nrzDBEC9Wcrg0GjNR/VetUK?type=design&node-id=0%3A1&mode=design&t=gYsHjSPKwq0Bz1ex-1' className='text-3xl text-white'>Vet shop template</a></div>
                        </div>

                </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;
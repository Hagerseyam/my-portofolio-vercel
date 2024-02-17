import Image from '../assets/pic.png';
import {FaGithub, FaDribbble, FaLinkedin } from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variant'
import React from 'react';
import {Link} from 'react-scroll'

const Banner = () => {
    return (

        <section className='min-h-[85vh] 
        lg: min=h-[78vh] flex 
         items-center' id='home'>
            <div className='container 
             mx-auto 
             '>


                <div className='flex
                 flex-col gap-y-8 
                 lg:flex-row
                 lg:items-center
                  lg:gap-x-12' >

                <div className='flex-1 text-center
                 font-secondary lg:text-left'>

                    <motion.h1 variants={fadeIn('up', 0.3)} 
                    initial='hidden' whileInView={'show'}
                    viewport={{once:false , amount:0.7}}
                    className='text-[55px] font-bold
                     leading-[0.8]
                    lg:text-[110px]'>Hager's <span>folio</span></motion.h1>



                    <motion.div 
                    variants={fadeIn('up', 0.3)} 
                    initial='hidden' 
                    whileInView={'show'}
                    viewport={{once:false , amount:0.7}}
                     className='mb-6 text-[36px]
                     lg:text-[60px] font-secondary
                      font-semibold uppercase leading-[1]'>
                        <span className='mr-4
                         text-white'>I am a </span>
                        <TypeAnimation sequence={[
                            'Developer',2000,
                            'Designer',2000,                        ]} speed={50} className='text-accent'
                        wrapper='span'
                        repeat={Infinity}/>
                         </motion.div>



                        <motion.p
                        variants={fadeIn('up', 0.3)} 
                        initial='hidden' 
                        whileInView={'show'}
                        viewport={{once:false , amount:0.7}}
                        className='mb-8 
                        max-w-lg
                         mx-auto lg-mx-0'> 
                         Computer science graduate with a passion for front-end web development, UI/UX design,
                          and digital marketing. Proven track record in creating innovative projects showcasing 
                          technical proficiency and aesthetic sensibility.
                          Seeking opportunities to apply skills in a dynamic and collaborative environment.</motion.p>




                        <motion.div
                        variants={fadeIn('up', 0.3)} 
                        initial='hidden' 
                        whileInView={'show'}
                        viewport={{once:false , amount:0.7}}
                         className='flex max-w-max gap-x-6
                         items-center mb-12 mx-auto lg:mx-0'>
                            <Link to='contact'>
                            <button  className='btn btn-lg' >Contact Me</button></Link>
                            <a href='https://www.freelancer.com/u/hagermseyaam2000' className='text-gredient 
                            btn-link'> My Portofolio</a>
                        </motion.div>

                    <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>

                        <a href='https://www.linkedin.com/in/hager-seyam-33961a24b/'>

                            <FaLinkedin/>
                        </a>
                        <a href='https://github.com/Hagerseyam'>

                            <FaGithub/>
                        </a>                    
                            <a href='https://www.freelancer.com/u/hagermseyaam2000' >
                                
                            <FaDribbble/>
                        </a>

                    </div>

                 </div>




                <motion.div

                variants={fadeIn('up', 0.3)} 
                initial='hidden'
                 whileInView={'show'}
                 className='hidden lg:flex flex-1
                 max-w-[320px] lg:max-w-[482px] '>
                      
                     <img src={Image} alt=''/>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default Banner;
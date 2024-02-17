import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import{fadeIn} from '../variant';



const About = () => {

    const[ref,inView] = 
    useInView({
        threshold:0.5,
    })
    return (
      <section className='section' id='about' ref={ref}>
             <div className='container mx-auto'>
                <div className='  gap-y-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-20 lg:items-center
                lg:gap-x-20 lg:gap-y-0 h-screen grid-cols-3'>


                    <motion.div
                     className='flex-1 bg-about bg-no-repeat h-[450px]
                     bg-top transform'
                     style={{ backgroundSize: '100%' }} 
                     variants={fadeIn('right' ,  0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false , amount:0.3}}
                    ></motion.div>




                    <motion.div className=' lg:col-span-2 grid p-8 gap-y-6'
                                         variants={fadeIn('left' ,  0.5)}
                                         initial='hidden'
                                         whileInView={'show'}
                                         viewport={{once:false , amount:0.3}}>
                        <h2 className='h2
                         text-accent
                          '>About me,</h2>
                        <h3 className='h3 mb-4'>I am a Freelancer Front-end Developer 
                            with over 7+ Projects .
                        </h3>
                        <p className='mb-6'>
                        I crafted a high-performing React app with Tailwind CSS and React Motion,
                         featuring a user-friendly contact form using EmailJS. also my React and Node.js ecommerce app, 
                         featuring seamless shopping, dynamic product searching, and a smooth checkout process. Developed with React Hooks, Node, and Express for valuable hands-on experience.
                            
                            </p>
                        {/* stats */}
                            <div className='flex 
                            gap-x-6 
                            lg:gap-x-10
                            mb-12
                            '>

                            <div>
                                <div className='text-[40px] font-tertiary text-gradient
                                mb-2'>
                                    {inView ?<CountUp start={0} end={7} duration={5}/>: null}
                                    +
                                </div>
                                <div className='font-primary
                                text-sm tracking-[2px]'>
                                    Projects <br/> 
                                    Completed 
                                </div>
                            </div>
                            </div>



                    </motion.div>

                    </div>
                </div>
            </section>
    );
};

export default About;
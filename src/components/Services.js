import React, { useState } from 'react';
import { BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import { fadeIn } from '../variant';





const Services = () => { 


    
const services =[
    {
        name: 'UI/UX design',
        description: "As a UI/UX designer specializing in website templates, my job is to create cool and user-friendly designs for websites..",
        link:"https://www.behance.net/hagerseyam"
// I sketch out ideas, make them look good, and ensure they're easy for people to navigate. It's all about creating awesome templates that make websites both stylish and user-friendly. 
    },
    {
        name: 'Web Development',
        description: "As a front-end web developer skilled in React, Redux Toolkit, Next.js, JavaScript, CSS, Bootstrap, and Tailwind CSS,I focus on building user-friendly interfaces. I create responsive and visually appealing..",
        link:"https://github.com/Hagerseyam?tab=repositories"

        //  web applications, manage state efficiently with Redux Toolkit, and leverage styling frameworks like Bootstrap and Tailwind CSS. Collaborating with back-end developers, I ensure seamless integration and optimal performance. Continuous learning and staying updated on industry trends are key aspects of my role. 

    },

];


const [selectedService, setSelectedService] = useState(null);

const handleButtonClick = (index) => {
  setSelectedService(index);
};

const handlePromptClose = () => {
  setSelectedService(null);
};


    return (
        <section className='section' id='services'>
            <div className='container 
            mx-auto'>
                <div className='flex flex-col
                lg:flex-row '>
                    {/* text */}
                    <motion.div        
                    variants={fadeIn('right', 0.3)} 
                        initial='hidden' 
                        whileInView={'show'}
                        viewport={{once:false , amount:0.3}}
                     className='flex-1
                     lg:bg-services
                      lg:bg-bottom 
                      bg-no-repeat 
                     mix-blend-lighten
                     mb-12 lg:mb-0
                    '
                        style={{ backgroundSize: '80%' }}>
                    
                       <h2 className='h2
                         text-accent mb-6 '>
                           What I Do 
                        </h2>
                        <h3 className='h3 
                        max-w-[455px] mb-16 
                        font-tertiary '>
                             "As a computer science graduate with a passion for front-end development, 
                             UI/UX design, and digital marketing. Seeking roles in tech, design,
                              or marketing. Open to freelancing or entrepreneurship."
                        </h3>
                    </motion.div>


                    {/* services */}
                    <motion.div 
                    variants={fadeIn('left', 0.5)} 
                        initial='hidden' 
                        whileInView={'show'}
                        viewport={{once:false , amount:0.3}}
                    
                    className='flex-1'>
                        {/* services list  */}
                        <div>
                            {services.map((service,index) =>{
                                const{name,description,link} = service;
                                return<div className='border-b border-white/20
                                 h-[146px] mb-[38px] flex ' 
                                 key={index}> 
                                    <div className='max-w-[476px]'>
                                           <h4 className='text-[20px] 
                                        tracking-wider
                                        font-primary
                                        font-semibold 
                                        mb-6
                                           '>
                                            {name}
                                            </h4>
                                        <p className='font-secondary 
                                        leading-tight '>{description}</p>
                                        </div>
                                        <div className='flex flex-col flex-1
                                         items-end'>
                                            <a href={link} className='btn w-9 h-9 mb-[42px] 
                                            flex justify-center
                                            items-center' 
                                            target='_blank' rel='noopener noreferrer'>
                                                <BsArrowUpRight/>
                                            </a>
                                            <button
                                            className="text-gradient
                                             text-sm"
                                            onClick={() => handleButtonClick(index)}
                                            >
                                             Learn more
                                            </button>
                                            
                                        <div>
                       
                                 {services.map((service, index) => (
                                          <div key={index}>


                                           {selectedService === index && (
                                           <div className="fixed inset-0 
                                              flex items-center justify-center bg-blur">
                                           <div className="z-100 bg-black p-4 rounded
                                           text-white text-center max-w-96 absolute flex flex-col">
                                            {service.name === 'UI/UX design' ? (
                                             <p className='p-3 flex-grow'>{service.description} I sketch out ideas, make them look good, and ensure 
                                     they're easy for people to navigate. 
                                    It's all about creating awesome templates that make websites both stylish and user-friendly. 
                                            </p>
                                       ) : service.name === 'Web Development' ? (
                                        <p className='p-3 flex-grow'>{service.description} web applications, manage state efficiently with Redux Toolkit,
                                           and leverage styling frameworks like Bootstrap and Tailwind CSS. Collaborating with back-end developers,
                                         I ensure seamless integration and optimal performance. Continuous learning and staying updated on industry 
                                            trends are key aspects of my role. </p>
                                        ) : (
                                              <p className='p-3 flex-grow'>{service.description}social media campaigns
                                               . My skills include data analysis, content creation,
                                               and leveraging various digital channels to drive results</p>
                                             )}
                                            <button onClick={handlePromptClose}>Close</button>
                                             </div>
                                           </div>
                                         )}
                                    </div>
                                   ))}
                               </div>
                            </div>      
                          </div>
                            })}      
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
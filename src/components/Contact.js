import React, { useRef, useState } from 'react';
import { motion} from 'framer-motion';
import{fadeIn} from '../variant';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_tmympdh', 'template_7lxidsz', form.current, {
          publicKey: 'tkfRwR4LJxF6aq9gl',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            form.current.reset();

          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    const [isClicked, setIsClicked] = useState(false);
    const showToast = () => {
      toast.success('The message is sent successfully!');
    };
    const handleClick = () => {
      // Toggle the click state
      setIsClicked(true);
      showToast();
      setTimeout(() => {
        setIsClicked(false);
      }, 3000);
    };


   

    return (
        <section className='lg:section
         py-16 mb-20' id='contact'>
            <div className='container
             mx-auto'>
                <div className='flex
                 flex-col lg:flex-row'>

                    {/* text */}

                    <motion.div                    
                     variants={fadeIn('right' ,  0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false , amount:0.3}} 
                    className='flex-1 flex justify-start
                    items-center mt-24'>
                        <div>
                            <h4 className='text-xl uppercase
                             text-accent font font-medium mb-2 -tracking-wide  '>Get in touch</h4>
                            <h2 className='text-[45px] lg:text-[90px] leading-none 
                            mb-12 '>
                                Let's work<br/>
                                together!
                            </h2>
                        </div>
                    </motion.div>

                    {/* form  */}

                    <form  ref={form} onSubmit={sendEmail}
                     style={{ marginTop: '1080px' ,marginBottom: '580px'  }}
                    
                    className='flex-1  border rounded-2xl flex flex-col 
                    gap-y-6 pb-24 p-6 items-start my-auto'>
                        <input 
                        className='bg-transparent border-b py-3 outline-none
                        w-full placeholder:text-white focus:border-accent 
                        transition-all' 
                        type='text'
                        placeholder='Your Name'
                        name='user_name'
                        />
                        <input 
                        className='bg-transparent border-b py-3 outline-none
                        w-full placeholder:text-white focus:border-accent 
                        transition-all' 
                        type='email'
                        name='user_email'
                        placeholder='Your Email'
                        />



                       <textarea
                        className='bg-transparent border-b py-12 outline-none
                        w-full placeholder:text-white focus:border-accent 
                        transition-all
                        resize-none mb-12'
                        placeholder='Your message' name='message'/>

                       
                        <button className={`btn btn-lg 
                        ${isClicked ? 'clicked' : ''}`}
                         onClick={handleClick}
                         value='Send'
                         type='submit'>Send message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Typed from 'typed.js';

const AboutMe = () => {
    useEffect(() => {
        // Target the element where you want to apply the typing effect
        const targetElement = document.querySelector('.writing');
    
        // Define the options for Typed.js
        const options = {
          strings: ["Student", "Developer", "Swimmer", "Freelancer" , "Chess Player"],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true,
        };
    
        // Initialize Typed.js with the target element and options
        const typed = new Typed(targetElement, options);
    
        // Cleanup function to stop the Typed instance when the component unmounts
        return () => {
          typed.destroy();
        };
      }, []); // Empty dependency array ensures that this effect runs once when the component mounts
    
  return (
    <>
    <NavBar/>
    <div className=" text-white mt-52 mx-40">
        <div className="grid grid-cols-2 gap-2 justify-center">
            <div className="flex-col">
                <div className=" text-5xl mb-8">AboutME <span className="text-GreenText">( )</span></div>
                <div className=" font-IBM">HEllo World!! I'm <span className="text-GreenText italic font-bold">Khushi Paul</span>, a dedicated BCA student at Silver Oak University, currently navigating through the exciting challenges of the first semester. My academic journey is complemented by a profound passion for exploring new technologies within the realm of computer science. Beyond the digital landscape, I bring a unique dimension as a former national-level swimmer, emphasizing discipline, perseverance, and teamwork. Eager to dive into the convergence of technology and innovation, I look forward to shaping a future where my skills and experiences create meaningful impacts. Let's connect and explore the possibilities together. Feel free to reach out.....</div>
            </div>
            <div className="flex-col ">
                <div className="flex justify-center font-bold text-2xl">You can also call me ...</div>
                <span className='writing text-5xl flex justify-center mt-36 italic  font-IBM text-GreenText'>
                </span>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutMe
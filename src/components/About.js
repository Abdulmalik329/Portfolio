import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={horizontal}
            viewport={{ once: true }}
            className="heading"
          >
            <p className="heading-sub-text">Who I am</p>
            <p className="heading-text">About Me</p>
          </motion.div>
          <div className="split-about">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={horizontal}
              className="about-content"
            >
              <p>
                I’m Abdulmalik Gayratov, a Junior Full Stack Developer building
                robust web solutions within the JavaScript ecosystem. I
                specialize in creating scalable applications using React.js for
                the frontend and Node.js with PostgreSQL for the backend.
              </p>
              <br />
              <p>
                My experience includes developing complex systems like Gym
                Management platforms, where I handle everything from secure
                authentication (RBAC) to designing efficient server
                architectures using Prisma ORM. I focus on clean code
                architecture and seamless integration between client and server.
              </p>
              <br />
              <p>
                I combine technical expertise with a keen eye for detail,
                ensuring high-performance user interfaces and pixel-perfect
                design using Tailwind CSS and Styled Components. I am dedicated
                to building responsive, user-centered products that solve
                real-world problems.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: "50", opacity: 0 }}
              whileInView={horizontal}
              className="about-img"
            >
              <img src={ProfileImg} alt="Profile" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

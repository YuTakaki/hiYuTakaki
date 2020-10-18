import React from 'react';
import yu from '../assets/yu.jpg';

const About = () => {
    return ( 
        <section className='about' id='about'>
          <div className='section-title'>
            <h1>ABOUT</h1>
          </div>
          <div className='section-content'>
            <div className='myProfile'>
              <div className='myImage'>
                <img src={yu}/>
                <a href='https://drive.google.com/file/d/1CmPzj9R2nF1fwt0vht2jp94clmShwWSF/view?usp=sharing' target='_blank'><p>View Resume</p></a>
              </div>
              <div className='me'>
               <p>Hi! I'm a software engineer who likes to spend much of his time coding things.</p>
               <p>Back in my high school days, I've always loved solving logics and riddles during lunch breaks. At the end of senior high school, I've stumbled upon programming and I loved it. On that day forward i dreamed about becoming a programmer someday.</p>
               <p>I enjoy solving complex coding problems and building web applications using (MERN). My main programming language is Javascript. Although I have fundamental knowledge about python, I am much comfortable writing in javascript. For the backend, I know fundamentals of sql and Mongodb. My passion and motivation for programming makes me want to contribute to the evolution of tech industries in the world while having fun doing it.</p>
              </div>

            </div>
            

          </div>


        </section>
     );
}
 
export default About;
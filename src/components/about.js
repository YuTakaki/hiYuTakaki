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
                <a><p>View Resume</p></a>
              </div>
              <div className='me'>
                <p>Hi there! This guy right here is Yu, and he is a self taught software engineer. During his time in college, he dreams to be a software engineer but unfortunately things didn't end up the way he wanted it to. The road to his dream become steep but even so, his passion about programming is bigger than those obstacles. So every day he tries to learn new things, build application, practice framework and languages and work very hard to learn to become a software engineer. he is motivated to be one and even though it's hard, he enjoys every minutes of it because he knew all of the bugs, errors, and problems he cannot solve is a way for him to be a good software engineer. He believes that to achieve a goal in life, one must have this kind of traits. One is to never give up, two is to have a passion and motivation to the things that you do and last but not the least is having fun doing it.</p>
              </div>

            </div>
            

          </div>


        </section>
     );
}
 
export default About;
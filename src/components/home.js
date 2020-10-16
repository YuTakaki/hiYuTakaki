import React from 'react';
const Home = () => {
    
    return ( 
        <section className='home' id='home'>
          <div className='home-content'>
            <div className='my-info'>
              <h1 className='first'>Yu</h1>
              <h1 className='second'>Takaki</h1>
              <h1 className='third'>Software Engineer</h1>
            </div>
            <div className='my-slogan'>
              <h1 className='fourth'>Lets Work Together As A Team</h1>
              <ul>
                <a href='https://www.facebook.com/yuyu.takaks/' target='_blank'><li className='fa fa-facebook'></li></a>
                <a href='https://twitter.com/takakiyuuu' target='_blank'><li className='fa fa-twitter'></li></a>
                <a href='https://github.com/YuTakaki' target='_blank'><li className='fa fa-github'></li></a>
                <a href='https://www.linkedin.com/in/yu-takaki-1236331a4/' target='_blank'><li className='fa fa-linkedin'></li></a>
              </ul>
            </div>

          </div>
          
        </section>
     );
}
 
export default Home;
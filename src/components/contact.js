import React from 'react';

const Contact = () => {
    return ( 
        <section className='contact' id='contact'>
        
        <div className='section-title'>
            <h1>Contact</h1>
          </div>
          <div className='section-content'>
            <h2>Feel free to contact me.</h2>
            <div className='contact-container'>
              <div className='contactDetails'>
                <h1>Contact Details:</h1>
                <ul>
                  <li>
                    <i className='fa fa-phone'></i>
                    <p>090-4163-0614</p>
                  </li>
                  <li>
                    <i className='fa fa-envelope'></i>
                    <p>yu.takaki2000@gmail.com</p>
                  </li>
                </ul>
              </div>
              <div className='socialDetails'>
                <h1>Socials:</h1>
                <ul>
                  <a href='https://www.facebook.com/yuyu.takaks/' target='_blank'><li className='fa fa-facebook'></li></a>
                  <a href='https://twitter.com/takakiyuuu' target='_blank'><li className='fa fa-twitter'></li></a>
                  <a href='https://github.com/YuTakaki' target='_blank'><li className='fa fa-github'></li></a>
                  <a href='https://www.linkedin.com/in/yu-takaki-1236331a4/' target='_blank'><li className='fa fa-linkedin'></li></a>
                </ul>
              </div>
              
              
            </div>

          </div>
        </section>
     );
}
 
export default Contact;
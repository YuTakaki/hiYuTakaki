import React from 'react';
import Header from './components/header';
import './styles/sass/app.scss';

import {ProjectList} from './projects';
import Projects from './components/projects';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';


function App() {
  
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <section className='projects' id='projects'>
          <div className='section-title'>
            <h1>PROJECTS</h1>
          </div>
          <div className='section-content'>
            <div className='project-container'>
            {ProjectList.map(proj => <Projects proj={proj}/>)}

              
            </div>

          </div>
        </section>


        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;

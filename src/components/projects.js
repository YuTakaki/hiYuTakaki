import React from 'react';
import popcorn from '../assets/popcorn.png';
import diary from '../assets/diary.png';
import tweetIt from '../assets/tweetIt.png';

const Projects = ({proj}) => {
    const seeSummary = (e) => {
        e.target.parentElement.nextSibling.classList.toggle('project_details_active')
    
      }
    const image = proj.image === 'popcorn' ? popcorn : proj.image === 'tweetIt' ? tweetIt : diary;
    return ( 
        <div className='project'>
            <div className='project_img'>
                <h1>{proj.name}</h1>
                <img src={image}/>
                <p>{proj.technologies}</p>
                <div className='buttons'>
                <a href={proj.code} target='_blank'><div>View Code</div></a>
                <a href={proj.demo} target='_blank'><div>Demo</div></a>
                </div>
                <div onClick={seeSummary} className='seeMore fa fa-angle-down'></div>
                
            </div>
            <div className='project_details'>
                <h3>Summary</h3>
                <p>{proj.summary}</p>
            </div>
        </div>
     );
}
 
export default Projects;
import React from 'react';
import '../css/communities.css'; 

//importing images 
import cb1 from '../img/cb1.svg'
import cs1 from '../img/cs1.svg'
import cs1_1 from '../img/cs1_1.png'
import cb2 from '../img/cb2.svg'
import cb3 from '../img/cb3.svg'

function CommunitySection() {
  return (
    <div className="section-container">
      <div className="grid">
        <img className='smaller' src={cs1} alt="communities small circle 1" />
        <img className='largest' src={cb1} alt="communities big circle 1" />
        <img className='smaller' src={cs1_1} alt="communities small circle 2" />
      </div>
      <div className="grid">
        <img className='smaller' src={cs1} alt="communities small circle 1" />
        <img className='largest' src={cb2} alt="communities big circle 2" />
        <img className='smaller' src={cs1_1} alt="communities small circle 2" />
      </div>
      <div className="grid">
        <img className='smaller' src={cs1_1} alt="communities small circle 2" />
        <img className='largest' src={cb3} alt="communities big circle 3" />
        <img className='smaller' src={cs1_1} alt="communities small circle 2" />
      </div>
    </div>

    
  );
}

export default CommunitySection;

import React from 'react';
import '../css/landing.css'; // Import the CSS file
import TypewriterEffect from '../js/typewriter';
import hero from "../img/hero.png";
import maleuser from '../img/maleuser.png' ;
import commnent from '../img/speechbubble.svg';
import heart from '../img/heart.svg';
import BubblyButton from "../js/BubblyButton.js";
import TestimonialSlider from './testimonial.js';
import CommunitySection from './communities.js';



function Landing() {
  
  return (
    <div className='container'>
      <section className='section-pink'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h1 className='typewriter'>
              <TypewriterEffect text="InPower is a universe of endless support and friendships for women and non-binary folks." />
            </h1>
            <p>Explore communities, join groups, and find your belonging</p>
            <div className="button-container">
              <BubblyButton />
            </div>
          </div>
          <div>
            <img className='hero-img' src={hero} alt="Hero" />
          </div>
        </div>
      </section>
      <section className='section'> {/*grid of comments hard coded */}
      <CommunitySection/>
      <h2 className='comtext'>View our Community Questions</h2>
      <div className="grid-container">
      <div className="grid-item">
        <div className="flex-container">
          <h3>Mommy Meet And Greet!</h3>
          <p>Hey guys! Got my blood drawn for NIPPT on Monday. They told me 7-10 days.</p>
          <div className="user-info">
            <img src={maleuser} alt="User" className="user-image" />
            <div className='comment-like-info'>
              <img src={commnent} alt="comment" className="commentlike-image" />
              <span className="count">12</span>
              <img src={heart} alt="like" className="commentlike-image" />
              <span className="count">42</span>
            </div>
          </div>  
        </div>
      </div>
      <div className="grid-item">
        <div className="flex-container">
          <h3>Test Content</h3>
          <p>Hey guys! Got my blood drawn for NIPPT on Monday. They told me 7-10 days.</p>
          <div className="user-info">
            <img src={maleuser} alt="User" className="user-image" />
            <div className='comment-like-info'>
              <img src={commnent} alt="comment" className="commentlike-image" />
              <span className="count">12</span>
              <img src={heart} alt="like" className="commentlike-image" />
              <span className="count">42</span>
            </div>
          </div>  
        </div>
      </div>
      <div className="grid-item">
        <div className="flex-container">
          <h3>Test Content</h3>
          <p>Hey guys! Got my blood drawn for NIPPT on Monday. They told me 7-10 days.</p>
          <div className="user-info">
            <img src={maleuser} alt="User" className="user-image" />
            <div className='comment-like-info'>
              <img src={commnent} alt="comment" className="commentlike-image" />
              <span className="count">12</span>
            </div>
          </div>  
        </div>
      </div>
    </div>
      </section>
      <section className='section-pink center-content'>
          <div>
            <h1><TypewriterEffect text={'Our mission is to be the highest standard of respect and healthy communication on any platform existing today'}/></h1>
          </div>
      </section>
      <section className='section'>
        <p>this will be the features section</p>
      </section>
      <section>
        <TestimonialSlider />
      </section>
    </div>
  );
}

export default Landing;

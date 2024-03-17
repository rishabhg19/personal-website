import React from 'react';
import { images } from '../../constants'
import './About.scss';
import { AppWrap } from '../../wrapper';
const About = () => {

  return (
    <>
    <div class="row">
        <div class="column">
            <img src={images.columbia} alt="Columbia" className = "__columbia"/>
        </div>
        <div class="column">
            <img src={images.fordham} alt="Fordham" className = "__fordham"/>
        </div>
        <div class="column">
            <img src={images.milwau} alt="Milwaukee" className = "__milwau"/>
        </div>
        <div class="column">
            <img src={images.sleight} alt="Sleight" className = "__sleight"/>
        </div>
        <div class="column">
            <img src={images.music} alt="Music note" className = "__music"/>
        </div>
    </div>
    
      <h2 className="head-text"> About <span>Me  </span></h2>
      <div className= "app__profiles">
        <p className="p-text">
            I am a computer science student with a background in applied mathematics. Currently, I am in a five year undergraduate program on track to earn two bachelor's degrees upon successful completion: a BS in computer science from Columbia University and a BS in applied mathematics from Fordham University. Throughout my studies, I have developed an aptitude for using programming as a quintessential tool to solve technical software problems as well as mathematical problems, and this sparked my personal interest to learn about different technologies and their applications. Professionally, I have worked as an applications intern in the information technology department of the firm Proskauer Rose LLP, which I found to be an invaluable experience coding as part of a team in a corporate environment.  I have also worked as a teaching assistant for courses like Java programming and many other mathematics classes. As hobbies, I enjoy listening to hip hop and R&B music, traveling to new places, and practicing sleight-of-hand.
        </p>
      </div>

    </>
  )
}

export default AppWrap(About, 'about');
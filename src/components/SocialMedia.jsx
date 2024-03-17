import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa';
import './SocialMedia.scss';

const SocialMedia = () => {
  return (
    <div className= "app__social">
        <div className = "app__social-in">
          <a href='https://www.linkedin.com/in/rishabh-ganesh-66ba0621b' target="_blank" rel="noreferrer">
            <BsLinkedin className='inicon'/>
          </a>
        </div>
        <div className= "app__social-fb">
          <a href='https://www.facebook.com/rishabh.ganesh.5/' target="_blank" rel="noreferrer">
            <FaFacebookF className='fbicon'/>
          </a>
        </div>
        <div className="app__social-ig">
          <a href='https://www.instagram.com/rishabh_ganesh_/' target="_blank" rel="noreferrer">
            <BsInstagram className = 'igicon'/>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia
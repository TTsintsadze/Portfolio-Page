import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from  '../../img/Vector1.png'
import Vector2 from  '../../img/Vector2.png'
import Boy from  '../../img/boy.png'
import thhumbup from  '../../img/thumbup.png'
import Crown from  '../../img/crown.png'
import glassesimoji from  '../../img/glassesimoji.png'
const Intro = () => {
  return (
    <div className="intro">
          <div className="i-left">
            <div className="i-name">
              <span>Hey' I Am</span>
              <span>Temo Tsintsadze</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio optio suscipit in esse accusantium perferendis.</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
            <img src={Github} alt="Github" />
            <img src={Linkedin} alt="Linkedin" />
            <img src={Instagram} alt="Instagram" />
            </div>
          </div>
          <div className="i-right">
            <img src={Vector1} alt="Vector1" />
            <img src={Vector2} alt="Vector2" />
            <img src={Boy} alt="Boy" />
          </div>
    </div>
  )
}

export default Intro
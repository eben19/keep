import React from 'react'
import './second.css'
import Girl from '../Images/girl.webp'
import APCSA from '../Images/apcsa.webp'
import Byju from '../Images/byju.jpeg'
import Live from '../Images/live.svg'


const Second = () =>{
    return(
        <>
        <div className='Container'>
            <div className='Text'>
                <h1>The #1 Coding Platform for Kids</h1>
                <p>Tynker powers the creativity of over <b>60 million kids</b> and serves thousands of schools and educators worldwide.</p>
                <p>Our interactive story-based learning allows kids to learn the basics with easy block-based coding challenges before seamlessly transitioning to real-world <a className='textbase' href='#'>text-based languages</a> like <b>JavaScript</b> and <b>Python.</b></p>
                <p>With 65+ award-winning courses, there's a learning path for every kid, no matter their age or level. We have over 5,000 learning modules, backed by hundreds of built-in tutorials and hands-on projects.</p>
                <button>START CODING NOW</button>
            </div>
            <div className='Girl'>
                <img src={Girl} alt='sage'/>
            </div>
        </div>
        <h1 className='beenbusy'>Tynker has been busy. Good Busy. Check out what's NEW!</h1>
        <div className='AP'>
            <div className='APCSA'>
                <div className='APCSAIcon'>
                <img src={APCSA} alt='sage'/>
                </div>
                <div className='APCSAText'>
                    <h1>AP Computer Science</h1>
                    <p>2 New AP® CS courses endorsed by the College Board.</p>
                    <p><a className='LearnMore' href='#'>Learn More</a></p>
                </div>
            </div>
            <div className='LiveClasses'>
                <div className='LiveClassesIcon'>
                <img src={Live} alt='sage'/>
                </div>
                <div className='LiveClassesText'>
                  <h1>Live Classes</h1>
                  <p>Live coding classes with a private teacher</p>
                  <p><a className='LearnMore3' href='#'>Learn More</a></p>   
                </div>
            </div>
            <div className='BYJU'>
                <div className='BYJUIcon'>
                <img src={Byju} alt='sage'/>  
                </div>
                <div className='BYJUText'>
                    <h1>Tynker + BYJU'S</h1>
                    <p>Tynker has joined the BYJU'S family of brands.</p>
                    <p><a className='LearnMore2' href='#'>LearnMore</a></p>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Second
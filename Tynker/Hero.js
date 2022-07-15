import React from 'react';
import Image from '../Images/controller.png'
import Image2 from '../Images/tynker-by.png'
import Image3 from '../Images/winter.webp'
import Image4 from '../Images/swosh.svg'
import Image5 from '../Images/markz.png'
import './Hero.css'

const Hero = () => {
    return(
       <>
        <div className='heroBody'>
            <div className='heroConTENT'>
                <div className='upheroConTENT'>
                    <div className='loGo'>
                        <img src={Image2} alt='sage'/>
                    </div>
                    <div className='NaVss'>
                        <a className='navPad' href='#'><img src={Image} alt='sage' className='Pad'/> PLAY</a>
                        <a className='navParents' href='#'>PARENTS</a>
                        <a className='navEdu' href='#'>EDUCATORS</a>
                        <a className='navCode' href='#'>WHY CODE?</a>
                    </div>
                    <div className='BTN'>
                    <button className='BTN1'>JOIN FOR FREE</button>
                   <button className='BTN2'>LOG IN</button>
                    </div>
                </div>
                <div className='downheroConTENT'>
                    <div className='leftheroConTENT'>
                        <h1>Coding Made Easy</h1>
                        <p className='TheFun'>The fun to learn programming & develop <br/>problem-solving and critical thinkingskills! Ages 5-18</p>
                        <button>GET STARTED FOR FREE</button>
                        <p className='atHome'>At-home plans from <a className='Per' href='#'>$7.50 per month</a></p>
                    </div>
                    <div className='rightheroConTENT'>
                        <img src={Image3} className='Snow'/>
                    </div>
                </div>
            </div>
            <div className='squiggle'>
            <img src={Image4} alt='sage'/>
            </div>
        </div>
            <img src={Image5} className='Help'/>
        </>
    );
}
export default Hero

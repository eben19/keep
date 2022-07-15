import React from 'react'
import './start.css'
import Girl from '../Tynker-images/girl-smile.webp'
import Icon from '../Tynker-images/icon-apcsa.webp'
import Comp from '../Tynker-images/comp-human.svg'
import Big from '../Tynker-images/big-B.jpeg'




const Start = () =>{
    return(
        <>
        <div className='main1'>
        <div className='mainn'>
            <div className='plat'>
                <h1>The #1 Coding Platform for Kids</h1>
                <p>Tynker powers the creativity of over 60 million kids and serves thousands <br></br>of schools and educators worldwide.</p>
                <p>Our interactive story-based learning allows kids to learn the basics with easy <br></br>block-based coding challenges before seamlessly transitioning to real-world <br></br><span className='span1'>text-based languages</span> like <span className='span2'>JavaScript</span> and <span className='span2'>Python.</span></p>
                <p>With 65+ award-winning courses, there is a learning path for every kid, no <br></br>matter their age or level. We have over 5,000 learning modules, backed by <br></br>hundreds of built-in tutorials and hands-on projects.</p>
                <button className='now'>START CODING NOW</button>

            </div>
            <div className='girl'>
            <img src={Girl} alt='eben' style={{height:"320px", width:"550px"}}/>
            </div>

        </div>

        <div className='main2'>
        <div className='tyn'>
            <h2>Tynker has been busy. Good Busy. Check out what's NEW!</h2>
            </div>

            <div className='good'>
                <div className='ap'>
                    <img className='pics' src={Icon} alt='eben'/>
                    <div className='test'>
                    <h3>AP Computer Science</h3>
                    <p>2 New AP® CS courses endorsed by <br></br>the College Board.</p>
                    <a href='#'>Learn More</a>
                    </div>
                </div>

                <div className='ap'>
                    <img className='pics' src={Comp} alt='eben'/>
                    <div className='test'>
                    <h3>Live Classes</h3>
                    <p>Live coding classes with a <br></br>private teacher</p>
                    <a href='#'>Learn More</a>
                    </div>
                </div>

                <div className='ap'>
                    <img className='pics' src={Big} alt='eben'/>
                    <div className='test'>
                    <h3>Tynker + BYJU'S</h3>
                    <p>Tynker has joined the BYJU’S family <br></br>of brands.</p>
                    <a href='#'>Learn More</a>
                    </div>
                </div>

            </div>

        </div>
        
        </div>
        </>
    )
}

export default Start
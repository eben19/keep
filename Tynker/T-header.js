import React from 'react'
import './T-header.css'
import Tynkerlogo from '../Tynker-images/tynker-logo-white.png'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Wave from '../Tynker-images/white-wave.svg'
import Snowman from '../Tynker-images/snowman.webp'



const Head = () =>{
    return(
        <>
        <div className='main' style={{backgroundImage:"url{Snow}"}}>
            <div className="header">
                <div className='pic'><img src={Tynkerlogo} alt='e-ben' style={{width:"150px", height:"25px"}}/></div>
                <div className='nav'>
                        <a href='#'><SportsEsportsIcon  style={{textAlign:"justify", fontSize:"small"}}/>PLAY</a>
                    <a href='#'>PARENTS</a>
                    <a href='#'>EDUCATORS</a>
                    <a href='#'>WHY CODE?</a>
                </div>

                <div className='nav2'>
                    <button className='join'>JOIN FOR FREE</button>
                    <a href='#'>LOG IN</a>
                </div>

            </div>

            <div className='bod'>
                <div className='par'>
                    <h1>Coding Made Easy</h1>
                    <h3>The fun way to learn programming and develop<br></br>problem-solving & critical thinking skills! Ages 5-18</h3>

                    <button className='get'>GET STARTED FOR FREE</button>
                    <h3>At-home plans from <span>$9 per month</span></h3>
                </div>

                <div className='pix'>
                <img src={Snowman} alt='e-ben' style={{width:"650px", height:"450px"}}/>
                </div>
            </div>

            <div className='pix2'>
                <img src={Wave} alt='e-ben' style={{width:"100%", position:"absolute", bottom:"115px"}}/>
                </div>

        </div>
        </>
    )
}

export default Head
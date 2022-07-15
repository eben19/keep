import React from 'react'
import './fourth.css'
import Venn from '../Tynker-images/Madefun.webp'
import Blue from '../Tynker-images/bluetynker.webp'
import Red from '../Tynker-images/redtynker.webp'
import Mod from '../Tynker-images/mod.webp'
import Four from '../Tynker-images/fourstars.jpg'
import FOUR from '../Tynker-images/fourstarsh.jpg'
import Bbc from '../Tynker-images/graphic-bbc.webp'


const Mobile= () => {
    return(
        <>
        <div className='MainBody'>
            <div className='UpBody'>
                <div  className='UpBodyText'>
                    <h1>3 Highly-Rated Mobile Apps for Learning Code</h1>
                    <p>Download Tynker apps and learn to code on the go.</p>
                    <button className='Button'>LEARN MORE</button>
                </div>
                <div className='UpBodyContent'>
                    <div className='UpBodyPic'>
                        <img src={Venn} alt='eben'/>
                    </div>
                    <div className='UpBodyIcon'>
                        <div className='UpBodyIcon1'>
                            <div className='Avatar'>
                            <img src={Blue} alt='eben'/>
                            </div>
                            <div className='TynkerJunior'>
                            <div className='TynkerJuniorText'>
                                <h1 className='Big'>Tynker Junior</h1>
                                <p>Tap-Tap picture coding with voice-overs. Pre-<br/>readers solve story-based puzzles and build their<br/>first programs in coding sandboxes. Ages 5-7</p>
                            </div>
                                <div className='FourStars'>
                                 <img src={Four} alt='eben'/>
                                 <p className='FourStarsP'>4.5</p>
                                 <p className='FourStarsP'>2,200+ reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className='UpBodyIcon2'>
                            <div className='Avatar'>
                            <img src={Red} alt='eben'/>
                            </div>
                            <div className='TynkerJunior'>
                                <div className='TynkerJuniorText'>
                                    <h1 className='Big'>Tynker</h1>
                                    <p className='Drag'>Drag-and-drop block coding with a full-featured<br/>workshop. Build games and apps, compose music<br/>and art, control smart devices, and much, much<br/>more. Ages 6-11</p>
                                </div>
                                <div className='FourStars'>
                                <img src={Four} alt='eben'/>
                                 <p className='FourStarsP'>4.7</p>
                                 <p className='FourStarsP'>10,400+ reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className='UpBodyIcon3'>
                            <div className='Avatar'>
                            <img src={Mod} alt='eben'/>
                            </div>
                            <div className='TynkerJunior'>
                            <div className='TynkerJuniorText'>
                                <h1 className='Big'>Mod Creator</h1>
                                <p>Drag-and-drop Minecraft modding. Design skins,<br/>blocks and items. Modify mob behaviors. Create<br/>mods and add ons. Explore worlds! Ages 6-11</p>
                            </div>
                                <div className='FourStars'>
                                <img src={FOUR} alt='eben'/>
                                 <p className='FourStarsP'>4.0</p>
                                 <p className='FourStarsP'>3,300+ reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='DownBody'>
                <div className='Heading'>
                    <h1>A Mini-Computer for the Internet of Things!</h1>
                </div>
                <div className='CONtent'>
                    <div className='CONtentLeft'>
                        <p>The BBC Doctor Who HiFive Inventor is a visually<br/> stunning IoT-enabled hand-shaped mini-computer<br/> designed to teach kids how to control robots or<br/> interface with IoT systems to investigate the world<br/> around them.
                        <br/><br/>
                        Younger students will begin their learning journey with<br/> visual block coding and advanced students with<br/> Micropython.
                        <br/><br/>
                        The HiFive Inventor was developed by Tynker in<br/> collaboration with BBC Learning and SiFive, a fabless<br/> RISC-V semiconductor company.
                        <br/><br/>
                        Learn More:
                        <br/>
                        <a className='A' href='#'>www.HiFiveInventor.com</a></p>
                        </div>
                    <div className='CONtentRight'>
                    <img src={Bbc} alt='sage'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}




export default Mobile
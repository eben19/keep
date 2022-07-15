import React from 'react'
import './foot.css'
import Kids from '../Tynker-images/kidssafe.png'
import Young from '../Tynker-images/tutor.png'



const Foot = () => {
    return(
        <>
        <div className='footer'>
            <div className='upFooter'>
            <div className='about'>
                <h1>ABOUT</h1>
                <p>Tynker is the world's leading K-12<br/> creative coding platform, enabling<br/> students of all ages to learn to code at<br/> home, school, and on the go. Tynker's<br/> highly successful coding curriculum<br/> has been used by one in three U.S. K-8<br/> schools, 100,000 schools globally, and<br/> over 60 million kids across 150<br/> countries.</p>
            </div>
            <div className='about'>
                 <h1>RESOURCES</h1>
                 <a className='footerNavs' href='#'>Blog</a>
                 <a className='footerNavs' href='#'>About Us</a>
                 <a className='footerNavs' href='#'>Press</a>
                 <a className='footerNavs' href='#'>Jobs</a>
                 <a className='footerNavs' href='#'>Mobile Apps</a>
                 <a className='footerNavs' href='#'>Coding eBooks</a>
                 <a className='footerNavs' href='#'>Scholarship</a>
                 <a className='footerNavs' href='#'>Forum</a>
                 <a className='footerNavs' href='#'>Store</a>
                 <a className='footerNavs' href='#'>CS Authors</a>
            </div>
            <div className='about'>
                <h1>PARENTS</h1>
                <a className='footerNavs' href='#'>Overview</a>
                <a className='footerNavs' href='#'>Live Coding Classes</a>
                <a className='footerNavs' href='#'>Give a Gift</a>
                <a className='footerNavs' href='#'>Redeem</a>
                <a className='footerNavs' href='#'>Why Coding</a>
                <a className='footerNavs' href='#'>Featured Makers</a>
            </div>
            <div className='about'>
                <h1>EDUCATORS</h1>
                <a className='footerNavs' href='#'>Overview</a>
                <a className='footerNavs' href='#'>Elementary</a>
                <a className='footerNavs' href='#'>Middle School</a>
                <a className='footerNavs' href='#'>High School</a>
                <a className='footerNavs' href='#'>AP CS Courses</a>
                <a className='footerNavs' href='#'>PD</a>
                <a className='footerNavs' href='#'>Hour of Code</a>
                <a className='footerNavs' href='#'>STEM Project</a>
                <a className='footerNavs' href='#'>Request a Quote</a>
            </div>
            <div className='about'>
                <h1>PARENT NEWSLETTER</h1>
                <div className='inputbutton'>
                <input className='input' placeholder='Enter your Email'/>
                <button className='OK'>OK</button>
                </div>
            </div>
            </div>
            <div className='downFooter'>
                <img src={Kids} alt='sage'/>
                <p className='downFooterNavs'>© 2022 Neuron Fuel </p>
                <p className='downFooterNavs'>Terms & Conditions</p>
                <p className='downFooterNavs'>|</p>
                <p className='privacy'><b>PRIVACY POLICY</b></p>
                <p className='downFooterNavs'>|</p>
                <p className='downFooterNavs'>Kids & Online Safety</p>
                <p className='downFooterNavs'>|</p>
                <p className='downFooterNavs'>About Us</p>
                <p className='downFooterNavs'>|</p>
                <p className='downFooterNavs'>Contact Us</p>
            </div>
        
       </div>
         <div className='Extra'></div>
        <div className='FooterDown'>
            <div className='FooterDownContent'>
                <img src={Young} alt='sage'/>
                <p>Live coding classes with a private teacher</p>
                <button className='Schedule'>SCHEDULE A FREE CLASS</button>
            </div>
        </div>
      <div className='NEW'>NEW!</div>

        </>
    )
}




export default Foot
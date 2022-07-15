import React from "react";
import './footer2.css';
import Kids from '../Tynker-images/kidssafe.png'
import Young from '../Tynker-images/tutor.png'



function Footer(){


    return(

        <div className="footContain">
            <div className="holder">
                <div className="about">
                
                    <h3>ABOUT</h3>
                    <p>Tynker is the world’s leading K-12 <br/>
                    creative coding platform, enabling<br/>
                    students of all ages to learn to code at<br/>
                    home, school, and on the go. Tynker’s<br/>
                    highly successful coding curriculum <br/>
                    has been used by one in three U.S. K-8 <br/>
                    schools, 100,000 schools globally, <br/>
                    and over 60 million kids across 150 <br/>countries.</p>
                </div>
                <div className="Resource">
                    
                        <h3>RESOURCES</h3>
                    <ul>
                        <li> <a href="#">Blog</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Mobile Apps</a></li>
                        <li><a href="#">Coding eBooks</a></li>
                        <li><a href="#">Scholarship</a></li>
                        <li><a href="#">Forum</a></li>
                        <li><a href="#">Store</a></li>
                        <li><a href="#">CS Authors</a></li>

                    </ul>
                </div>
                <div className="Parents">
                <h3>PARENTS</h3>
                <ul>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Live Coding Classes</a></li>
                    <li><a href="#">Give a Gift</a></li>
                    <li><a href="#">Redeem</a></li>
                    <li><a href="#">Why Coding</a></li>
                    <li><a href="#">Featured Makers</a></li>
                </ul>
                </div>
                <div className="educators">
                    <h3>EDUCATORS</h3>
                    <ul>
                        <li><a href="#">Overview</a></li>  
                        <li><a href="#">Elementary</a></li>  
                        <li><a href="#">Middle school</a></li>  
                        <li><a href="#">High School</a></li>  
                        <li><a href="#">AP CS Courses</a></li>  
                        <li><a href="#">PD</a></li>  
                        <li><a href="#">Hour of Code</a></li>  
                        <li><a href="#">STEM Projects</a></li>  
                        <li><a href="#">Request a Quote</a></li>  
                    </ul>
                </div>
                <div className="newsLetter">
                <h3>PARENTS NEWSLETTER</h3>
                <div class="inp">
                    <input type="text" placeholder="Enter your Email"/>
                    <button>OK</button>
                </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottomContain">
                    <img src="{Kids}" style={{width:"120px", height:"50px"}}/>
                    <p id="neuron"> &#169; 2022 Neuron Fuel</p>
                    <a href="#"> Terms &#38; Condition &#124;</a>
                    <a href="#" id="privacy">PRIVACY POLICY &#124; </a>
                    <a href="#">Kids &#38; Online Safety &#124; </a>
                    <a href="#"> About Us &#124; </a>
                    <a href="#">Contact Us</a>
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
        </div>




    )
}
export default Footer
import React from 'react';
import dark from '../Images/dark.svg';
import facebook from '../Images/icons/facebook.png';
import instagram from '../Images/icons/instagram.png';
import linkedin from '../Images/icons/linkedin.png';
import twitter from '../Images/icons/twitter.png';


const Footer =()=>  {
   
        return (
<>
            <div>
                
              <footer className="socialm">
                  <div className='con4'>

                       <div className='col'>
                           <img  src= {dark}  alt='Logo'/>
                           <div className='icons'>
                               <img  src= {instagram}/> 
                               <img  src= {facebook}/>
                               <img  src= {twitter}/>
                               <img  src= {linkedin}/>
                           </div>
                           
                        </div>

                        
                        
                        
                  </div>
                    
              </footer>

             
            </div>
</>
        )
    
}

export default Footer;
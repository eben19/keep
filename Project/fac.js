import React from 'react'
import './fac.css'
import Sam from '../Project/Pro-images/big-sam.jpg'


const Facilitator = () => {
    return(
        <>


        <div className='fac'>
            <div className='inner'> 
                <h2>FACILITATOR</h2>

               
                <img src={Sam} alt='eben' />
                               
                  
                  <h3>SAMUEL KELECHI</h3>
                

            </div>

            <div className='about'>
                <p>Four weeks of intense training and self development has given birth to several 'Web Developers'. The organizers (GIZ, LSETF) put together a wonderful program, with the goal  of reducing the percentage of unemployment, and what better way to do that, but to upgrade the skill-set of youths in a highly in-demand field, Web Development...</p>
                <button>About The Program</button>
            </div>


        </div>


        
        
        </>
    )
}

export default Facilitator
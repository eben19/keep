import React from 'react'
import './third.css'
import Bottom from '../Tynker-images/bg-squiggle-bottom.svg'
import Top from '../Tynker-images/bg-squiggle-top.svg'
import Kids from '../Tynker-images/for-parents.webp'
import Woman from '../Tynker-images/for-teachers.webp'


const Third= () => {
    return(
        <>
        <div className='body'>
           <div className='UP'>
             <div className='WavesTop'>
             <img src={Top} alt='sage'/>
             </div>
             <div className='Content'>
                <div className='ContentPic'>
                <img src={Kids} alt='sage'/>
                </div>
                <div className='ContentText'>
                    <h1>Parents</h1>
                    <p>Coding is quickly becoming an essential skill, one that will prepare your kids to succeed in an increasingly digital world.</p>
                    <p>Tynker offers a range of options to learn coding: Your children can learn to code with our self-paced, <a className='A' href='#'>immersive game-like courses</a>, and then advance to learning real-world Python and JavaScript.</p>
                    <p>Select the option that's best for your child!</p>
                    <button className='Button'>LEARN MORE</button>
                </div>
             </div>
            </div> 
           <div className='DOWN'>
            <div className='Content2'>
            <div className='Content2Text'>
                <h1>Educators</h1>
                <p>Join over 100,000 schools that use Tynker to engage students with coding and connect with other educators who love to code!</p>
                <p>Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can <a className='A' href='#'>create a free account</a>, set up your virtual classroom, and assign ready-made lesson plans!</p>
                <p>Tynker empowers K-12 educators with free PD, standards-aligned curricula, cross-curricular STEM coding, AP Computer Science courses, and many great coding resources.</p>
                <button className='Button'>LEARN MORE</button>
            </div>
            <div  className='Content2Pic'>
            <img src={Woman} alt='sage'/> 
            </div>
            </div>
            <div className='WavesBottom'>
            <img src={Bottom} alt='sage'/> 
            </div>
            
           </div>
        </div>
        </>
    )
}




export default Third
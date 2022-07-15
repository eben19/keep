import React from 'react'
import './fifth.css'
import squiggleTop from '../Tynker-images/bg-squiggle-top.svg'


function Kids(){
    return(
       <>
        <div class="code-tynker">
            <div className='squiggleTopdiv'>
            <img class="squiggleTop" src={squiggleTop}></img>
            </div>
            <div class="Tdiv-text">
                <h1>Why should kids learn to code with tynker?</h1>
                <p>Because <b>technology is so integrated</b> into virtually every aspect of our lives, learning about it is<b>more</b></p>
                <p><b>important than ever</b>. For kids, our coding platform makes it convenient and fun to gain knowledge</p>
                <p>that will serve them well throughout their lives. You can count on our <b>trusted methods</b> to help them</p>
                <p>develop and grow their capabilities with computers.</p>
                <br></br>
                <p>Tynker isn't just for schools and coding camps, though. Parents who value <b>STEM education</b> and want</p>
                <p>their children to know how to learn to code should know that our kids programming platform can be</p>
                <p>used at home, too. There are individual and family home plans, and our online coding classes for kids</p>
                <p>are a great way for them to gain the supplemental STEM skills needed for the world of the future.</p>
            </div>
        </div>
        </>
    )
}

export default Kids
import React from 'react'
import "./seventh.css"
import Apple from '../Tynker-images/logo-apple.png'
import Google from '../Tynker-images/logo-googleedu.png'
import Microsoft from '../Tynker-images/logo-microsoft.png'
import Pbs from '../Tynker-images/logo-pbs.png'
import Bbc from '../Tynker-images/logo-bbc-learning.png'
import Facebook from '../Tynker-images/logo-facebook.png'
import Lego from '../Tynker-images/logo-lego.png'
import Minecraft from '../Tynker-images/logo-mc.png'
import Mattel from '../Tynker-images/logo-mattel.png'
import Hot from '../Tynker-images/logo-hotwheels.png'
import Barbie from '../Tynker-images/logo-barbie.png'

function Trusted () {
    return(
        <div class="mainContainer">
            <div class="textTdiv">
                <h1>Trusted by Leading Brands</h1>
                <p>Our methods for learning to code all are provided within a safe, moderated community that is built</p>
                <p>around encouraging students to gain confidence in their abilities and do so without fear of failure.</p>
            </div>
            <div class="tdivImg">
                <img class="tImg" src={Apple}></img>
                <img class="tImg" src={Google}></img>
                <img class="tImg" src={Microsoft}></img>
                <img class="tImg" src={Pbs}></img>
                <img class="tImg" src={Bbc}></img>
                <img class="tImg" src={Facebook}></img>
            </div>
                <div class="tdivImg2">
                <img class="tImg2" src={Lego}></img>
                <img class="tImg2" src={Minecraft}></img>
                <img class="tImg2" src={Mattel}></img>
                <img class="tImg2" src={Hot}></img>
                <img class="tImg2" src={Barbie}></img>
            </div>
        </div>
    )
}

export default Trusted
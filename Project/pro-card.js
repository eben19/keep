import React, { useState } from 'react';
import './pro-card.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Eben from '../Project/Pro-images/Ebenezer.jpg'
import Ade from '../Project/Pro-images/Adekunle.jpg'
import Aishat from '../Project/Pro-images/Aishat.jpg'
import Anita from '../Project/Pro-images/Anita.jpg'
import Fran from '../Project/Pro-images/Francisca.jpg'
import Ibra from '../Project/Pro-images/Ibrahim.jpg'
import Kachi from '../Project/Pro-images/Kachi.jpg'
import Olu from '../Project/Pro-images/Olumide.jpg'
import Quadri from '../Project/Pro-images/Quadri.jpg'
import Samsud from '../Project/Pro-images/Samsudeen.jpg'



const ProCard = () =>{

    const [text, setText] = useState("")
    const [myData, setmyData] = useState([
        {
            Img: Eben,
            Name:"EBENEZER ALADESUYI",   
            Remark:"In two weeks, I was already able to code a presentable website. This program by GIZ was a great opportunnity for an advancement. I'm appreciative.",
            Github:"https://GitHub.com/eben19",
            LinkedIn:"https://linkedin.com/mwlite/in/aladesuyi-ebenezer-b49931208/",
            Facebook:"https://web.facebook.com/aladesuyi.ebenezer/",
            Twitter:"https://mobile.twitter.com/eben1909",
            Instagram:"https://www.instagram.com/aladesuyiebenezer",
        },
        {
            Img: Olu,
            Name:"OLUGBENRO OLUMIDE",   
            Remark:"I appreciate GIZ and her partners for organizing such a life-changing program. Coding has been challenging, but interesting. Special thanks to the Staffs and Facilitator.",
            Github:"https://GitHub.com/thepenielplace",
            LinkedIn:"https://linkedin.com/mwlite/in/olumide-olugbenro-951350195",
            Facebook:"https://web.facebook.com/olusiji.olumide",
            Twitter:"https://mobile.twitter.com/olu_olusiji",
            Instagram:"https://www.instagram.com/",
        },
        {
            Img: Kachi,
            Name:"OPARAJI ONYEKACHI",   
            Remark:"Thanks to the organizers, GIZ and her partners. This is the best skill aquisition program i have ever been involved in. Thank you!!!",
            Github:"https://GitHub.com/kachy01",
            LinkedIn:"https://linkedin.com/",
            Facebook:"https://web.facebook.com/kachy.marvelous",
            Twitter:"https://mobile.twitter.com/KachyMarvellous",
            Instagram:"https://www.instagram.com/thatcockpk",
        },
        {
            Img: Fran,
            Name:"AFOLAYAN FRANCISCA",   
            Remark:"In two weeks, I was already able to code a presentable website. This program by GIZ was a great opportunnity for an advancement. I'm appreciative.",
            Github:"https://GitHub.com/",
            LinkedIn:"https://linkedin.com/",
            Facebook:"https://web.facebook.com/",
            Twitter:"https://mobile.twitter.com/",
            Instagram:"https://www.instagram.com/",
        },
        {
            Img: Anita,
            Name:"SAMUEL ANITA O.",   
            Remark:"In two weeks, I was already able to code a presentable website. This program by GIZ was a great opportunnity for an advancement. I'm appreciative.",
            Github:"https://GitHub.com/",
            LinkedIn:"https://linkedin.com/",
            Facebook:"https://web.facebook.com/samuel.anita.obioma",
            Twitter:"https://mobile.twitter.com/samuelanitaobioma",
            Instagram:"https://www.instagram.com/",
        },
        {
            Img: Samsud,
            Name:"ADEBISI SAMSUDEEN O.",   
            Remark:"Special appreciation to the organizer, GIZ and her partners. Kudos to Mr. Samuel Kelechi. I am hoping to see more oppurtunities from GIZ",
            Github:"https://GitHub.com/QueSearSera501",
            LinkedIn:"https://linkedin.com/",
            Facebook:"https://web.facebook.com/hardaydayg.olamilekan",
            Twitter:"https://mobile.twitter.com/Madridsta001",
            Instagram:"https://www.instagram.com/ijoba_queserasera",
        },
        {
            Img: Aishat,
            Name:"SULAIMON AISHA OLAYEMI",
            Remark:"I appreciate the effort of GIZ, Lofty Inc and all organizers of the program. It is an educative and mind-opening program, which contribute to the advancement of ICT",
            Github:"https://GitHub.com/ridaishhub",
            LinkedIn:"https://linkedin.com/",
            Facebook:"https://web.facebook.com/aishaolayemi.olabisi/",
            Twitter:"https://mobile.twitter.com/ridaish1",
            Instagram:"https://www.instagram.com/toprent_stores",
        },
        {
            Img: Ade,
            Name:"ADEKUNLE ADEBAYO",   
            Remark:"In two weeks, I was already able to code a presentable website. This program by GIZ was a great opportunnity for an advancement. I'm appreciative.",
            Github:"https://GitHub.com/",
            LinkedIn:"https://linkedin.com/",
            Facebook:"https://web.facebook.com/",
            Twitter:"https://mobile.twitter.com/",
            Instagram:"https://www.instagram.com/",
        },
        {
            Img: Ibra,
            Name:"OLAYIWOLA IBRAHIM",   
            Remark:"Going through this training has shown me great things. Learning coding has been quite the ride. Kudos to Mr. Sam, and the wonderful team. Thank you to the organizers. ",
            Github:"https://GitHub.com/",
            LinkedIn:"https://linkedin.com/",
            Facebook:"https://web.facebook.com/",
            Twitter:"https://mobile.twitter.com/",
            Instagram:"https://www.instagram.com/",
        },
        {
            Img: Quadri,
            Name:"ALABI-NOFIU QUADRI",   
            Remark:"It has been a great platform of acqurinng knowledge. I am glad to be a beneficiary. Special Thanks to the Organizers, the facilitator, the officials. God reward them",
            Github:"https://GitHub.com/Qlogz",
            LinkedIn:"https://linkedin.com/",
            Facebook:"https://web.facebook.com/",
            Twitter:"https://mobile.twitter.com/",
            Instagram:"https://www.instagram.com/quadramzy10/f",
        },
        
    ])

  
    

    return(
        <>
        <div className='coverr'>

            <div className='data'>
                <h1>OUR DATABASE</h1>
            </div>
            <div className='cardholder'>
            {myData.map((props)=>(
                    <div className='cardd'>
                        <div className='card1'>
                        <div className='card-img'>
                        <img src={props.Img} alt='eben' />
                        </div>
                    <h3>{props.Name}</h3>
                    <div className='two'>
                    <p>{props.Remark}</p>
                    </div>

                    <div className='social'>
                    <a href={props.Github}>< GitHubIcon/></a>
                    <a href={props.LinkedIn}>< LinkedInIcon/></a>
                    <a href={props.Facebook}>< FacebookIcon/></a>
                    <a href={props.Twitter}>< TwitterIcon/></a>
                    <a href={props.Instagram}>< InstagramIcon/></a>
                    </div>
                    </div>

                </div>
                ))}
                </div>


        </div>
        
        
        </>

    )

    
}

export default ProCard
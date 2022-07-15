import React from 'react'
import './pro-head.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Lagos from '../Project/Pro-images/LSETF.png';
import German from '../Project/Pro-images/Ger-Corp.png';
import GIZ from '../Project/Pro-images/GIZ.png'
import {Link} from 'react-router-dom';



const ProHead = () =>{
    return(
        <>

        <div className='cover'>

        <div className='head'>
            <div className='logo'>WEB DEVELOPERS</div>

            <div className='navi'>
                <a href='#'><HomeIcon style={{fontSize:"medium"}}/>HOME</a>
                <a href=' #'> <InfoOutlinedIcon style={{fontSize:"medium"}}/> ABOUT THE PROGRAM</a>
            </div>

            <div className='menu'><MenuOutlinedIcon style={{color:"whit"}}/></div>
        </div>

        <div className='web'>
            <div className='train'>
                <h1>WEB DEVELOPMENT TRAINING</h1>
            </div>
            <div className='spons'>
                <img src={Lagos} alt='eben' />
                <img className='ger' src={German} alt='eben' />
                <img className='ger' src={GIZ} alt='eben' />
            </div>

        </div>

        </div>
        
        
        </>
    )
}

export default ProHead
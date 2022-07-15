import React, { useState } from 'react';
import './card.css'
import img1 from '../components/Friction-image/dollars.jpg'
import img2 from '../components/Friction-image/Layers.png'
import img3 from '../components/Friction-image/half.png'
import img4 from '../components/Friction-image/lady.jpg'

const Card = () =>{
    const [text, setText] = useState("")
    const [myData, setmyData] = useState([
        {
            id: 1,
            quote:"Let's go fishing",
            img: img1,
        },
        {
            id:2,
            quote:"Web development",
            img: img2,
        },
        {
            id: 3,
            quote:"make a way",
            img: img3,
        },
        {
            id:4,
            quote:"Coding is fun",
            img: img4,
        }
    ])

    const addTask = () => {
        const item = {
            id: myData.length + 1,
            quote: text,
        }
        setmyData([...myData, item]);
        setText("")
    }

//Delete function

    const deleteMe = (id) =>{
        const deleteItem= myData.filter((de) => de.id !==id)
        setmyData(deleteItem);
    };

    return(
        <>
        <div className='body'>
            <div className='inp'>
                <input value={text} className='input' placeholder='Add Task For Today'
                onChange={(e)=>{
                    setText(e.target.value)
                }}
                /> <button onClick={()=>{
                    addTask()
                }}>ADD</button>
                </div>

                {myData.map((props)=>(
                    <div className='card'>
                    <h3>{props.id}</h3>
                    <p>{props.quote}</p>
                    <img src={props.img} style={{height:"35px", width:"35px", borderRadius:"50%"}}></img>
                    <button className='btn'
                    onClick={()=>{
                        deleteMe(props.id)
                    }}
                    >Delete</button>

                </div>
                ))}


        </div>
        
        
        </>

    )

    
}

export default Card
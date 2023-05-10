import React from 'react'
import { useParams } from 'react-router-dom';

const Word = () => {
    const { textID, color, secColor } = useParams();
    if (isNaN(textID)===true){
        return (
            <h1 style={{backgroundColor: `${secColor}`, color:`${color}`}}>The word is: {textID} </h1>
        )
    }
    return (
        <h1 style={{backgroundColor: `${secColor}`, color:`${color}`}}>The number is: {textID} </h1>
    )
}

export default Word
import React from 'react'
import "./Card.css";

interface Props{
    companyName: string;
    ticker: string;
    price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className='card'>
        <img
        src='https://im.haberturk.com/2019/07/18/2505459_a26221f8323f887fbbfb48d798621fe7_640x640.jpg'
        alt='image'
        />
        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className='info'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quibusdam?</p>

    </div>
  )
}

export default Card
import React from 'react'
import "./Card.css";

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img
        src='https://im.haberturk.com/2019/07/18/2505459_a26221f8323f887fbbfb48d798621fe7_640x640.jpg'
        alt='image'
        />
        <div className='details'>
            <h2>AAPL</h2>
            <p>$110</p>
        </div>
        <p className='info'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quibusdam?</p>

    </div>
  )
}

export default Card
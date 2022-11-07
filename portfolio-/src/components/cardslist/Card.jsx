import React from 'react'
import './Card.css'
import 'animate.css'


const Card = ({heading,icon}) => {
  return (
    <section>
    <div className='card' >
       <h1>{heading}</h1>
       <span>{icon}</span>
    </div>
    </section>
  )
}

export default Card
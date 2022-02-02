import React from 'react'
import '../css/Card.css'

function Card({city, temperature, img, country}) {
    return (
        <div className="container">
            <div className='card-container'>
                <h2>{city}</h2>
                <h2>{temperature}</h2>
                <h3>{country}</h3>
            </div>
        </div>
    )
}

export default Card

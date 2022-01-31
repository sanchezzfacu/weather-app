import React from 'react'

function Card({city, temperature, img, country}) {
    return (
        <div>
            <h2>{city}</h2>
            <h2>{temperature}</h2>
            <img src={img} alt='' height='50px'/>
            <h3>{country}</h3>
        </div>
    )
}

export default Card

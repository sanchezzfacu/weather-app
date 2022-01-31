import React from 'react'
import { useState } from 'react'
import Card from './Card'
import axios from 'axios';


function Home() {
    // eslint-disable-next-line
    const [info, setInfo] = useState([])
    const [city, setCity] = useState([])
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f210d5570077900ff87e63e6b354f27&units=metric`

    function handleInput(e) {
        setCity(e.target.value)
    }
    
    async function handleSearch(e) {
        e.preventDefault()
        let json = await axios.get(url)
        let finalInfo = json.data
        let total = []
        total.push(finalInfo)
        setInfo(total)
    }
    
    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    onChange={handleInput}
                    type='text'
                    />
                <button type='submit'>
                    Search
                </button>
            </form>
            {
                info ? info.map(el => {
                    return(
                        <Card 
                            key={el.id}
                            city={el.name}
                            temperature={Math.round(el.main.temp)+ '°'}
                            country={el.sys.country}
                        />
                    )
                }):
                <div>Error</div>
            }
        </div>
    )
}

export default Home

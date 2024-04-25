import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function countries() {
const [countries, setCountries] = useState([]);

const apiCall = async() => {
    try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}

useEffect(() => {
    apiCall();
}, []);

  return (
    <div>
      <div className='card' style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }}>
        {countries.map((country) => {
            return <div className='card-size' key={country.cca2}>
                <div className='middle-card'>
                    <div className='inner-card'>
                        <img src={country.flags.png} alt={country.flags.alt} />
                        <h2>{country.name.official}</h2>
                    </div>
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

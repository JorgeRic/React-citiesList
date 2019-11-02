
import React from 'react'

function CitiesList(props) {
  return (
    <div>
      <section>
        <h2>List of cities</h2>
        {props.cities.length > 0 ? props.cities.map((city, index)=>{
          return (
            <article key ={index}>
              <h3>{city.name}</h3>
              <p>The population is: {city.population}</p>
              <p>The country is: {city.country}</p>
            </article>
        )
         }) :<p>No visited</p>
        }
      </section>
    </div>
  )
}
export default CitiesList

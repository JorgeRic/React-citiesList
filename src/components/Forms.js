import React, { Component } from 'react'
import CitiesList from './CitiesList'

class Forms extends Component {
  state={
    name: '',
    population: '',
    country: '',
    cities:[]
  }

  handleSubmit = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleInputChange = (event) =>{
    event.preventDefault();
    const { name, population, country, cities } = this.state;
    console.log(name)
    const citiesCopy = [...cities]
    const newCity = {name, country, population}
    citiesCopy.push(newCity)
    this.setState({
      cities: citiesCopy,
      name: '',
      population: '',
      country: ''
    })
  }

render() {

  const{name, population, country, cities} = this.state;
  return (
    <>
      <h2>Cool Form</h2>
      
      <form onSubmit = {this.handleInputChange}>
        <label htmlFor="name">Name</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            className="" 
            placeholder="ej: Alicante" 
            value={name} 
            onChange={this.handleSubmit}>
          </input>
        
        <label htmlFor="population">Population</label>
          <input 
            id="population" 
            name="population" 
            type="number" 
            className="" 
            placeholder="ej: 360.000" 
            value={population} 
            onChange={this.handleSubmit}>
          </input>
       
        <label htmlFor="country">Country</label>
          <input 
            id="country" 
            type="text" 
            name="country" 
            className="" 
            placeholder="ej: 200.000" 
            value={country} 
            onChange={this.handleSubmit}>
          </input>

          <button>Add new city</button>
      </form>
     
    <CitiesList cities = {cities}/>
    </>
  )
}
}
export default Forms;
import React from 'react';
import Form from './Components/Form';
import Details from './Components/Deatils';
import './App.css';

const API_KEY = "31607cb616d24d692b0da2526c7beb27";

class App extends React.Component {
  state = {
    tempareature : "",
    city : "",
    country : "",
    humidity : "",
    description : "",
    error : ""
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const myUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    const api = await fetch(myUrl)
    const data = await api.json()
    console.log(data)
    if(city && country) {
      this.setState({
        tempareature :data.main.temp ,
        city :data.name,
        country :data.sys.country,
        humidity :data.main.humidity,
        description: data.weather[0].description,
        error : ""
      })
    } else {
      this.setState({
        tempareature :'',
        city :'',
        country :'',
        humidity :'',
        description: '',
        error : "Please Enter Data"
      })
    }
  }
  render() {

      return (
      <div className="App">
        <h1>Get Weather</h1>
        <div className="container">
          <Form getWeather={this.getWeather} />
          <Details details={this.state} />
        </div>
      </div>
    );
  }
}

export default App;

import { useState, useEffect } from 'react';
import * as Constants from '../shared/options';
import { CurrentWeather } from './currentweather';
import { ForecastWeather } from './forecastweather';

//This is your basic API setup for GET.
//This is your basic API setup for GET.

const URL = "https://weatherapi-com.p.rapidapi.com/forecast.json?q=";
const days = '3';

export const GetData = (props) => {
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState(false);
  const [forecast, setForecast] = useState(false);
  
  useEffect( () => {

    //useEffect callbacks can only be synchronous.
    //We most definitely want asynchronous, therefore,
    //we have to actually write an async function
    //inside our useEffect

    //You MUST define the fetching function here
    const fetchData = async () => {
      const response = await fetch(URL + props.zip+'&days='+days, Constants.options)
      const newData = await response.json();
      setData(newData);
      console.log(newData);
    };

    //and call it here
    fetchData();

    //We add an interval function so that
    //the user can watch the weather
    //As the value of update changes,
    //and we've set it as a dependency of useEffect,
    //it causes a re-fetch/re-render every 60 seconds
    const interval = setInterval(() => {
      setUpdate(true);
    }, 60000);
  
    //required for clearing the timer upon quitting.
    return () => clearInterval(interval);

    //eslint wants all deps watched, 
    //we only want update watch
    //eslint-disable-next-line
  },[update]);
  
  //our JSX return must be set in an if/else loop
  //to control rerenders.
  //No render without valid data
  if(data){
    return(
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.location.name}</td>
                <td>{data.location.region}</td>
                <td>{data.location.country}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button className="button" onClick={() => setForecast(true)}>View Forecast</button>
          <CurrentWeather current={data.current} />
          { forecast ? <ForecastWeather forecast={data.forecast} /> : null }
        </div>
      </div>
    );
  }else{
    return null;
  }
   
 
}
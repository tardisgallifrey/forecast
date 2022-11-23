export const options = {

    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

//exporting parts of the URL as constants seems to lead to problems
//put them into the components
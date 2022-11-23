import { HourByHour } from "./hourbyhour";

export const ForecastWeather = ({forecast}) => {

    var days_array = forecast.forecastday.map( (day, index) =>{ 
                                            return(
                                                <>
                                                <td key={index.toString()}>{day.date}</td>
                                                <td>{day.astro.sunrise}</td>
                                                <td>{day.astro.sunset}</td>
                                                <td>{day.astro.moonrise}</td>
                                                <td>{day.astro.moonset}</td>
                                                <td>{day.astro.moon_phase}</td> 
                                                </>
                                            );
                                        });
    return(
        <div>
            <h2>Weather Forecast</h2>
            <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Sunrise</th>
                    <th>Sunset</th>
                    <th>Moon rises</th>
                    <th>Moon sets</th>
                    <th>Moon's phase</th>
                </tr>
            </thead>
                <tbody>
                    <tr>
                        {days_array[0]}
                    </tr>
                    <tr>
                        <td> Avg. Humidity</td>
                        <td> Avg. Hi TempC</td>
                        <td> Avg. Hi TempF</td>
                    </tr>
                    <tr>
                        <td>{ forecast.forecastday[0].day.avghumidity }</td>
                        <td>{ forecast.forecastday[0].day.avgtemp_c }</td>
                        <td>{ forecast.forecastday[0].day.avgtemp_f }</td>
                    </tr>
                    <tr>
                        <td>Hi temp F</td>
                        <td>Hi temp C</td>
                        <td>Low temp F</td>
                        <td>Low temp C</td>
                    </tr>
                    <tr>
                        <td>{forecast.forecastday[0].day.maxtemp_f}</td>
                        <td>{forecast.forecastday[0].day.maxtemp_c}</td>
                        <td>{forecast.forecastday[0].day.mintemp_f}</td>
                        <td>{forecast.forecastday[0].day.mintemp_c}</td>
                    </tr>
                    <HourByHour hours={forecast.forecastday[0].hour} />
                    <tr>
                        {days_array[1]}
                    </tr> 
                    <tr>
                        <td> Avg. Humidity</td>
                        <td> Avg. Hi TempC</td>
                        <td> Avg. Hi TempF</td>
                    </tr>
                    <tr>
                        <td>{ forecast.forecastday[1].day.avghumidity }</td>
                        <td>{ forecast.forecastday[1].day.avgtemp_c }</td>
                        <td>{ forecast.forecastday[1].day.avgtemp_f }</td>
                    </tr>
                    <tr>
                        <td>Hi temp F</td>
                        <td>Hi temp C</td>
                        <td>Low temp F</td>
                        <td>Low temp C</td>
                    </tr>
                    <tr>
                        <td>{forecast.forecastday[1].day.maxtemp_f}</td>
                        <td>{forecast.forecastday[1].day.maxtemp_c}</td>
                        <td>{forecast.forecastday[1].day.mintemp_f}</td>
                        <td>{forecast.forecastday[1].day.mintemp_c}</td>
                    </tr>
                    <HourByHour hours={forecast.forecastday[1].hour} />
                    <tr>
                        {days_array[2]}
                    </tr>
                    <tr>
                        <td> Avg. Humidity</td>
                        <td> Avg. Hi TempC</td>
                        <td> Avg. Hi TempF</td>
                    </tr>
                    <tr>
                        <td>{ forecast.forecastday[2].day.avghumidity }</td>
                        <td>{ forecast.forecastday[2].day.avgtemp_c }</td>
                        <td>{ forecast.forecastday[2].day.avgtemp_f }</td>
                    </tr>
                    <tr>
                        <td>Hi temp F</td>
                        <td>Hi temp C</td>
                        <td>Low temp F</td>
                        <td>Low temp C</td>
                    </tr>
                    <tr>
                        <td>{forecast.forecastday[2].day.maxtemp_f}</td>
                        <td>{forecast.forecastday[2].day.maxtemp_c}</td>
                        <td>{forecast.forecastday[2].day.mintemp_f}</td>
                        <td>{forecast.forecastday[2].day.mintemp_c}</td>
                    </tr>
                    <HourByHour hours={forecast.forecastday[2].hour} />
                </tbody>
            </table>
        </div>
    );
}
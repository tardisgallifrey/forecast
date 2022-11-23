

export const CurrentWeather = ({current}) => {

    return(
        <div>
            <h2>Current Weather</h2>
            <table>
                <tbody>
                <tr>
                    <td>Current Temperature:</td>
                    <td>{ current.temp_f }(F)</td>
                    <td>Humidity:  { current.humidity}%</td>
                </tr>
                </tbody>
            </table>
            <span>{console.log(current)}</span>
        </div>
    );
}
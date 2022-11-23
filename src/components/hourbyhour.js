import { useState } from 'react';


export const HourByHour = (props) => {
    const [showHourly, setShow] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setShow(true);
        
    }

    const handleErase = (event) => {
        event.preventDefault();
        setShow(false);
    }

    const hourly = props.hours.map( (record, index) => {
                                return(
                                    <tr key={index.toString()}>
                                        <td>
                                            {record.time.substring(10)}
                                        </td>
                                        <td>
                                            {record.temp_f}
                                        </td>
                                        <td>
                                            {record.temp_c}
                                        </td>
                                    </tr>    
                                    );
                                });
    return(
        <tr>
            <td>{ showHourly ? <button className="button" onClick={handleErase}>erase hourly</button> : <button className="button" onClick={ handleClick }>Show Hourly?</button>}</td>
            <td>{ showHourly ? <table><tbody>{hourly}</tbody></table> : null }</td>
            
        </tr>
    );
}
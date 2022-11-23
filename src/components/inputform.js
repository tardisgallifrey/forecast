import { useState } from "react";
import { GetData } from "./getdata";

export const InputForm = () => {
    const [zip, setZip] = useState("");
    const [showComponent, setShow] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShow(true);
    }

    return(
        <div className="main">
            <form onSubmit={handleSubmit}>
                <label>Enter a US zip code:
                <input
                    type="text" 
                    placeholder="Type zip code here"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                 />
                <input type="Submit"/>
                </label>
            </form>
            { showComponent ? <GetData zip={zip} /> : null }
        </div>
    );
}
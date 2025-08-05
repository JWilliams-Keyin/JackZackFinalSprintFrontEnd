import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function HomeTable() {
    const [flight, setFlight] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:8080/flight')
        .then(response => {
            setFlight(response.data);
        })
        .catch(error => {
            console.error('Error fetching flight data', error)
        });
    }, []);
    return(
        <div>
            <ul>
                {flight.map(item => (
                    <li key = {item.id} className = 'homeTable'>
                        <h2>Flight {item.flightNumber}</h2>

                        <h3>Airline: {item.flightAirline.airlineName}</h3>

                        <h3>Aircraft: {item.flightAircraft}</h3>

                        <h3>Takeoff: {item.initialAirport.airportName}</h3>

                        <h3>Landing: {item.destinationAirport.airportName}</h3>

                        <h3>Gate: {item.destinationGate.gateNumber}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomeTable
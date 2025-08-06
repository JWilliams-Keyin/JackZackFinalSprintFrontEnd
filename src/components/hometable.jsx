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
            <ul className = 'homeTable'>
                {flight.map(item => (
                    <li key = {item.id}>
                        
                        <div className = 'homeTableHead'>
                            <h2>Flight {item.flightNumber}</h2>
                        </div>

                        <div className = 'homeTableBody'>
                            <h3>Airline: {item.flightAirline.airlineName}</h3>

                            <h3>Aircraft: {item.flightAircraft.aircraftType}</h3>

                            <h3>Takeoff: {item.initialAirport.airportName}</h3>

                            <h3>Landing: {item.destinationAirport.airportName}</h3>

                            <h3>Gate: {item.destinationGate.gateNumber}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomeTable
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function AdminDelete() {
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

    const handleDelete = (id) => {
        axios
        .delete(`http://localhost:8080/flight/${id}`)
        .then(() => {
            setFlight(flight.filter(f => f.id !== id));
            alert('Flight deleted!')
        })
        .catch(error => {
            console.error("Error deleting flight", error)
            alert(error)
        });
    }
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

                            <button onClick = {() => handleDelete(item.id)}
                            className = 'deleteButton'>
                                Delete Flight
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDelete
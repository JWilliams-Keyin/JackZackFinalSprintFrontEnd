import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function AdminTable() {
    const [airport, setAirport] = useState([]);
    const [aircraft, setAircraft] = useState([]);
    const [airline, setAirline] = useState([]);
    const [gate, setGate] = useState([]);

    const [flightNumber, setFlightNumber] = useState("");
    const [aircraftId, setAircraftId] = useState("");
    const [initialAirportId, setInitialAirportId] = useState("");
    const [destinationAirportId, setDestinationAirportId] = useState("");
    const [airlineId, setAirlineId] = useState("");
    const [gateId, setGateId] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [
                    airportResponse, aircraftResponse, 
                    airlineResponse, gateResponse
                ] = await Promise.all([
                    axios.get('http://localhost:8080/airport'),
                    axios.get('http://localhost:8080/aircraft'),
                    axios.get('http://localhost:8080/airline'),
                    axios.get('http://localhost:8080/gate')
                ]);

                setAirport(airportResponse.data)
                setAircraft(aircraftResponse.data)
                setAirline(airlineResponse.data)
                setGate(gateResponse.data)
            } catch (error) {
                console.error("Error fetching data", error)
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        const newFlight = {
            flightNumber,
            flightAircraft: {id: parseInt(aircraftId)},
            initialAirport: {id: parseInt(initialAirportId)},
            destinationAirport: {id: parseInt(destinationAirportId)},
            destinationGate: {id: parseInt(gateId)},
            flightAirline: {id: parseInt(airlineId)}
        };

        try {
            const response = await axios
            .post('http://localhost:8080/flight', newFlight)
            alert("Flight successfully created!")
        } catch (error) {
            console.error("error creating flight", error)
            alert("Error creating flight!")
        }
    };

    return(
        <>
            <form onSubmit = {handleSubmit} className = 'adminTable'>
                <h2 className = 'adminTableHead'>Create New Flight</h2>

                <div className = 'adminTableBody'>
                    <label>Enter Flight Number:</label>
                    <input className = 'adminTableInput' value = 
                    {flightNumber} onChange = {(event) => 
                    setFlightNumber(event.target.value)}></input>

                    <label>Aircraft:</label>
                    <select className = 'adminTableInput' value = 
                    {aircraftId} onChange = {(event) => 
                    setAircraftId(event.target.value)}>
                        <option value = "">Select Aircraft</option>
                        {aircraft.map(item => 
                        <option key = {item.id} value = {item.id}>
                            {item.aircraftType}
                        </option>)}
                    </select>

                    <label>Initial Airport:</label>
                    <select className = 'adminTableInput' value = 
                    {initialAirportId} onChange = {(event) => 
                    setInitialAirportId(event.target.value)}>
                        <option value = "">Select Airport</option>
                        {airport.map(item => 
                        <option key = {item.id} value = {item.id}>
                            {item.airportName}
                        </option>)}
                    </select>

                    <label>Destination Airport:</label>
                    <select className = 'adminTableInput' value = 
                    {destinationAirportId} onChange = {(event) => 
                    setDestinationAirportId(event.target.value)}>
                        <option value = "">Select Airport</option>
                        {airport.map(item => 
                        <option key = {item.id} value = {item.id}>
                            {item.airportName}
                        </option>)}
                    </select>

                    <label>Destination Gate:</label>
                    <select className = 'adminTableInput' value = 
                    {gateId} onChange = {(event) => 
                    setGateId(event.target.value)}>
                        <option value = "">Select Gate</option>
                        {gate.map(item => 
                        <option key = {item.id} value = {item.id}>
                            {item.gateNumber}
                        </option>)}
                    </select>

                    <label>Airline:</label>
                    <select className = 'adminTableInput' value = 
                    {airlineId} onChange = {(event) => 
                    setAirlineId(event.target.value)}>
                        <option value = "">Select Airline</option>
                        {airline.map(item => 
                        <option key = {item.id} value = {item.id}>
                            {item.airlineName}
                        </option>)}
                    </select>

                    <button type = "submit" className = 'submitButton'>Create Flight</button>
                </div>
            </form>
        </>
    )
}

export default AdminTable
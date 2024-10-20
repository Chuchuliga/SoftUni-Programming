function flightSchedule([flights, changedFlights, status]) {
    status = status.join('');
    let result = [];
    let index = 0;
    
    if (status === 'Cancelled') {

        for (const flightInfo of changedFlights) {
            let [info, cancelled] = flightInfo.split(' ');
            let destination;
    
            for (const flight of flights) {
    
                if (flight.includes(info)) {
                    let splitedFlight = flight.split(' ');
                    destination = splitedFlight[1];
                    break;
                }             
            }
                
            if (destination) {
                result.push({ Destination: destination, Status: status });
            }
        }
    
        result.sort((a, b) => a.Destination.localeCompare(b.Destination));
    
        for (const object of result) {
            console.log(object);
        }
    } else {

        for (const flightInfo of changedFlights) {
            let [info, cancelled] = flightInfo.split(' ');
            let destination;
    
            for (const flight of flights) {
    
                if (flight.includes(info)) {
                    index = flights.indexOf(flight)
                    let splitedFlight = flight.split(' ');
                    destination = splitedFlight[1];
                    break;
                }             
            }
                
            if (destination) {
                flights.splice(index, 1);
            }
        }
        
        for (const flight of flights) {
            let split = flight.split(' ');
            let info = split.shift();
            destination = split.join(' ');
            console.log({ Destination: destination, Status: status});
        }
    }
}

flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'], ['Cancelled']])
// {Destination: 'Alabama', Status: 'Cancelled'}
// {Destination: 'California', Status: 'Cancelled'}
// {Destination: 'Texas', Status: 'Cancelled'}
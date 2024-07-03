function movies(array) {
    let movies = [];
 
    array.forEach(info => {
        if (info.includes(`addMovie `)) {
            let name = info.split(`addMovie `)[1];
            movies.push({ name:name });
        }

        else if (info.includes(`directedBy`)) {
            let [name, director] = info.split(` directedBy `);
            let movie = movies.find(el => el.name === name);

            if (movie) {
                movie.director = director;
            }
        }
        
        else if (info.includes(`onDate`)) {
            let [name, date] = info.split(` onDate `);
            let movie = movies.find(el => el.name === name);

            if (movie) {
                movie.date = date;
            }
        }
    });
 
    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}

movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen'])
// {"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
// {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}
function songs(array) {
    let songs = [];
    let n = array.shift();
    let typeSong = array.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < n; i++) {
        let info = array[i].split(`_`);
        songs.push(new Song(info[0], info[1], info[2]));
    }

    if (typeSong === `all`) {
        songs.forEach((i) => console.log(i.name));
    } else{
        let filterd = songs.filter((i) => i.type === typeSong);
        filterd.forEach((i) => console.log(i.name));
    }
}

songs([3, `favourite_DownTown_3:14`, `favourite_Kiss_4:16`, `favourite_Smooth Criminal_4:01`, `favourite`])
// DownTown
// Kiss
// Smooth Criminal
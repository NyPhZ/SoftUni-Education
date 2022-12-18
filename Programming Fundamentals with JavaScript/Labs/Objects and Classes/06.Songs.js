function objects(arr) {
    class Song {
        constructor(type,name,time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numSongs = arr.shift();
    let typeSong = arr.pop();
    
    for (let i =0; i<numSongs; i++){
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type,name,time);
        songs.push(song)
    }
    
    if(typeSong === "all"){
        songs.forEach((i) => console.log(i.name));
    }
    else{
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
    
    
    
    }
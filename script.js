const music = document.querySelector("audio")
const img = document.querySelector('img')
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
    name:'music-1',
    title:'Kesariya',
    artist:'arijit singh'
},
    {
    name:'music-2',
    title:'Melody raja',
    artist:'yo yo honey singh'
},
    {
    name:'music-3',
    title:'Sami sami',
    artist:'sunidhi chouhan'
}
]

let isPlaying = false;
const playMusic= ()=>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add('anime')
};
const pauseMusic= ()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove('anime')
};
play.addEventListener('click', ()=>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});

// changing the songs 

const loadSongs=(songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src="music/"+ songs.name + ".mp3";
    img.src="img/"+ songs.name +".jpg"
};
 songsIndex = 0;
//  loadSongs(songs[2])
 const nextSongs=()=>{
    songsIndex=(songsIndex + 1) % songs.length;
    loadSongs(songs[songsIndex]);
    playMusic();

 };
 const prevSongs=()=>{
    songsIndex=(songsIndex - 1 + songs.length)% songs.length;
    loadSongs(songs[songsIndex]);
    playMusic();

 };

 next.addEventListener("click", nextSongs)
 prev.addEventListener('click', prevSongs)



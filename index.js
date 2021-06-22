
const music= document.querySelector("audio");
const imge= document.querySelector("img");
const play= document.getElementById("play");

const artist = document.getElementById("artist");
const title  = document.getElementById("title");
const pre    = document.getElementById("pre");
const next   = document.getElementById("next");


const songs = [
    {
        name:"mua-1",
        title:"Tomake",
        artist:"Shreya Ghoshal"
    },
    {
        name:"mua-2",
        title:"Preme Pora Baron",
        artist:"Lagnajita"
    },
    {
        name:"mua-3",
        title:"Amar Hiyar Majhe",
        artist:"Madhurima Sen"
    },
    {
        name:"mua-4",
        title:"Bojhena Shey ",
        artist:"Arijit Singh"
    },
    {
        name:"mua-5",
        title:"Chashni",
        artist:"Vishal & Shekhar"
    },
    {
        name:"mua-6",
        title:"Nayan",
        artist:"Dhvani & Jubin"
    },
    {
        name:"mua-7",
        title:"Teri Aankhon Mein",
        artist:"Darshan Raval & Neha Kakkar"
    },
    {
        name:"mua-8",
        title:"Radha",
        artist:"Dhvani Bhanushali"
    },
    {
        name:"mua-9",
        title:"Saans",
        artist:"Shreya Ghoshal,Mohit Chauhan"
    },
    {
        name:"mua-10",
        title:"Qaafirana",
        artist:"Arijit Singh & Nikhita Gandhi"
    },
    {
        name:"mua-11",
        title:"Shayad",
        artist:"Arijit Singh"
    },
    {
        name:"mua-12",
        title:"Tujhe Kitna",
        artist:"Arijit Singh"
    },
    {
        name:"mua-13",
        title:"Lag Jaa Gale",
        artist:"Lata Mangeshkar"
    },
    {
        name:"mua-14",
        title:"Subhanallah",
        artist:"SREERAM, SHILPA RAO"
    },
    {
        name:"mua-15",
        title:"Bewafa Tera",
        artist:"Jubin Nautiyal"
    },
    {
        name:"mua-16",
        title:"Naam",
        artist:"Tulsi Kumar, Millind Gaba"
    },
    {
        name:"mua-17",
        title:"Pehle Pyaar Ka",
        artist:"Tulsi Kumar & Jubin Nautiyal"
    },
    {
        name:"mua-18",
        title:"Kinna Sona",
        artist:"Meet Ft. Jubin & Dhvani"
    },
    {
        name:"mua-19",
        title:"Hawayein",
        artist:"Arijit Singh"
    },
    {
        name:"mua-20",
        title:"Phir Bhi",
        artist:"Arijit Singh & Shashaa Tirupati"
    }
    ,
    {
        name:"mua-21",
        title:"KHAIRIYAT",
        artist:"Arijit Singh"
    }
    
]


let isPlaying =false;

// For Play Function
const playMusic = () =>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    // imge.classList.add("anime");
};

// For Pause Function
const pauseMusic = () =>{
    isPlaying = false ;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    // imge.classList.remove("anime");
};

play.addEventListener("click",() =>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic(); 
    }
})

// changing the music data

const loadSong = (songs) =>{
  
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src= "music/" + songs.name + ".mp3";
    imge.src= "images/" + songs.name + ".jpg";


}



 songIndex = 0;
 const nextSong = () =>{
     songIndex = (songIndex +1) % songs.length;
     loadSong(songs[songIndex]);
     playMusic();
 };

 const preSong = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

 next.addEventListener("click",nextSong);
 pre.addEventListener("click",preSong);
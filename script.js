console.log("Hello Welcome to Music World");
let songIndex = 0;
let audioElement = new Audio("song/1.mp3");
let masterPlay = document.getElementById("masterPlays");
let gif = document.getElementById("masterGif");
let myProgressBar = document.getElementById("range");
let songItems = Array.from(document.getElementsByClassName("songNum"));
let songBar = document.getElementsByClassName;
let gif_s = document.getElementsByClassName('gif_s');
let mastrSongName = document.getElementById('masterSongName');
let audioElements = [];
let songList = [
    {
        songName: "Tu Aa Dilbara",
        filePath: "song/1.mp3",
        coverPath: "images/s1.jpg",
    },
    {
        songName: "Lut Put Gaya",
        filePath: "song/2.mp3",
        coverPath: "images/s2.jpg",
    },
    {
        songName: "Papa Meri Jaan",
        filePath: "song/3.mp3",
        coverPath: "images/s3.jpg",
    },
    {
        songName: "Tere Ishq Ne",
        filePath: "song/4.mp3",
        coverPath: "images/s4.jpg",
    },
    { songName: "Jaaniya", filePath: "song/5.mp3", coverPath: "images/s5.jpg" },
    {
        songName: "Barish Ke aane se",
        filePath: "song/6.mp3",
        coverPath: "images/s6.jpg",
    },
    { songName: "Heeriye", filePath: "song/7.mp3", coverPath: "images/s7.jpg" },
    {
        songName: "Saari Duniya Jala Dnege",
        filePath: "song/8.mp3",
        coverPath: "images/s8.png",
    },
];
songItems.forEach((element, i) => {
    element.getElementsByClassName("songNumImg")[0].src = songList[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML =
        songList[i].songName;
});
Array.from(document.getElementsByClassName("songBar")).forEach((element) => {
    element.addEventListener("click", (e) => {
        songIndex = parseInt(e.target.id);
        makeAllPalys();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `song/${songIndex+1}.mp3`;
        audioElement.play();
        audioElement.currentTime=0;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        mastrSongName.innerText = songList[songIndex].songName;
        
      

    });
});
const makeAllPalys = () => {
    Array.from(document.getElementsByClassName("songBar")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    });
};

masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
        // document.write("Your Song is playing");
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});
audioElement.addEventListener("timeupdate", () => {
    let pro = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = pro;
});

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
        (myProgressBar.value * audioElement.duration) / 100;
});
document.getElementById('next').addEventListener('click',()=>{
if(songIndex>8){
    songIndex=0;
    
}
else{
    songIndex+=1;
    
}
audioElement.src = `song/${songIndex+1}.mp3`;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
gif.style.opacity = 1;
mastrSongName.innerText = songList[songIndex].songName;
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
        
    }
    else{
        songIndex-=1;
        
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    mastrSongName.innerText = songList[songIndex].songName;
    
    })
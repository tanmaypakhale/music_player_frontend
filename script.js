console.log("welcome to Mr.Music");
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Kesariya Tera Ishq Hai Piya", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Tu Hi Yaar Mera", filePath: "songs/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Khairiyat", filePath: "songs/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Rangdaari", filePath: "songs/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Sanam Re", filePath: "songs/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Agar Tum Saath Ho", filePath: "songs/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Tu Hi Hai Aashiqui", filePath: "songs/7.mp3", coverPath: "cover/7.jpg"},
    {songName: "Pal - Jalebi", filePath: "songs/8.mp3", coverPath: "cover/8.jpg"},
];
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        if(songIndex==0)
        {
            mastersongName.innerText = songs[songIndex].songName;
        }
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
};
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        mastersongName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
});
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7)
    {
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    mastersongName.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex = 7;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    mastersongName.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});
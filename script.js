
var audioplayer = document.getElementById("audio");
var playandpauseicon = document.getElementById("playing");
var nextsong = document.getElementById("next");
var prevsong = document.getElementById("prev");
var songimage = document.getElementById("cover");
var songtitle = document.getElementById("title");


playandpauseicon.addEventListener('click', function() {
    if (audioplayer.paused) {
        audioplayer.play();
        playandpauseicon.classList.remove('fa-play');
        playandpauseicon.classList.add('fa-pause');
    } else {
        audioplayer.pause();
        playandpauseicon.classList.remove('fa-pause');
        playandpauseicon.classList.add('fa-play');
    }
});


var songs = [
    {
        src: "Someone you loved.mp3",
        image: "someone.jpg",
        title: "Someone you loved"
    },
    {
        src: "Sweet but psycho.mp3",
        image: "sweet.jpg",
        title: "Sweet but psycho"
    },
    {
        src: "Silence.mp3",
        image: "silence.jpg",
        title: "Silence [Marshmello,Khalid]"
    },
    {
        src: "Demons hayley.mp3",
        image: "demons.jpg",
        title: "Demons [Hayley Kiyoko]"
    },
    {
        src: "Teeth.mp3",
        image: "teeth.jpg",
        title: "Teeth [5 seconds of summer]"
    }
];
  
var currentSongIndex = 0;


const loadSong = (index) => {
    audioplayer.src = songs[index].src;
    audioplayer.play().catch(error => {
        console.error("Error playing audio:", error);
    });
    songimage.src = songs[index].image;
    songtitle.textContent = songs[index].title;
};


nextsong.addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});


prevsong.addEventListener('click', function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});


loadSong(currentSongIndex);

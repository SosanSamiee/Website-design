
const image = document.querySelector('#cover');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.getElementById('audio');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const background = document.getElementById('background');


const songs = [
    {
        path: "media/Tribal.mp3",
        displayname: "Tribal",
        artist: "Sofia Reyes",
        cover: "media/Sofia Reyes.webp",
    },
    {
        path: "media/Best Of Me.mp3",
        displayname: "Best Of Me",
        artist: "jemin",
        cover: "media/Best Of Me.webp",
    },
    {
        path: "media/2U.mp3",
        displayname: "2U",
        artist: "Jungkok",
        cover: "media/2U.jpg",
    },
    {
        path: "media/Love Story.mp3",
        displayname: "Love Story",
        artist: "Indila",
        cover: "media/Love Story.webp",
    },
];

// check if playing
let isplaying = false

//play
function playsong() {
    isplaying = true;
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "pause");
    music.play();
}

// pause
function pauseSong() {
    isplaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "play");
    music.pause();
}

// play or pause Event listener
playBtn.addEventListener('click', function () {
    if (isplaying) {
        pauseSong()
    } else {
        playsong()
    }
})

// update DOM
function loadSong(song) {
    console.log(song);
    title.textContent = song.displayname
    artist.textContent = song.artist
    music.src = song.path;
    changeCover(song.cover)
}

function changeCover(cover) {
    image.classList.remove("active");
    setTimeout(() => {
        image.src = cover;
        image.classList.add('active')
    }, 100);
    background.src = cover;
}

// current song
let songIndex = 0;

//previous song
function prevsong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playsong();
}

// next song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0
    }
    loadSong(songs[songIndex]);
    playsong();
}

// on load - selct first
loadSong(songs[songIndex]);

function updatePregressBar(e) {
    if (isplaying) {
        const duration = e.srcElement.duration;
        const currentTime = e.srcElement.currentTime;

        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = progressPercent + "%";

        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);

        if (durationSeconds < 10) {
            durationSeconds = "0" + durationSeconds
        }

        if (durationSeconds) {
            durationEl.textContent = durationMinutes + ":" + durationSeconds;
        }

        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);

        if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds
        }
        currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
    }
}

// set progress bar
function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = music.duration;

    if (!isNaN(duration) && duration > 0) {
        music.currentTime = (clickX / width) * duration;
    }
}

//Event Listeners
prevBtn.addEventListener("click", prevsong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);
music.addEventListener("timeupdate", updatePregressBar);
progressContainer.addEventListener("click", setProgressBar);




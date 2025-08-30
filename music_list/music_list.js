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

let mainMusic = document.querySelector('.main-music');
let modal = document.getElementById('musicModal');
let closeModal = document.getElementById('closeModal');

const image = document.querySelector('#cover');
const titleEl = document.getElementById('title');
const artistEl = document.getElementById('artist');
const music = document.getElementById('audio');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const background = document.getElementById('background');

let songIndex = 0;
let isPlaying = false;

// ---------- Load and Play Songs ----------
function loadSong(song) {
    titleEl.textContent = song.displayname;
    artistEl.textContent = song.artist;
    music.src = song.path;
    changeCover(song.cover);
}

function changeCover(cover) {
    image.classList.remove("active");
    setTimeout(() => {
        image.src = cover;
        image.classList.add('active');
    }, 100);
    background.src = cover;
}

function playSong() {
    isPlaying = true;
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
    music.play();
}

function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "Play");
    music.pause();
}

// ---------- Previous / Next ----------
function prevSong() {
    songIndex--;
    if (songIndex < 0) songIndex = songs.length - 1;
    loadSong(songs[songIndex]);

    music.currentTime = 0;
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) songIndex = 0;
    loadSong(songs[songIndex]);

    music.currentTime = 0;
    playSong();
}

// ---------- Progress Bar ----------
function updateProgressBar(e) {
    if (!isPlaying) return;
    const { duration, currentTime } = e.srcElement;
    if (!duration) return;

    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) durationSeconds = "0" + durationSeconds;

    if (durationSeconds) durationEl.textContent = `${durationMinutes}:${durationSeconds}`;

    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;

    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
}

function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = music.duration;
    if (!isNaN(duration) && duration > 0) {
        music.currentTime = (clickX / width) * duration;
    }
}

// ---------- Event Listeners ----------
playBtn.addEventListener('click', () => {
    if (isPlaying) pauseSong();
    else playSong();
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
music.addEventListener("ended", nextSong);
progressContainer.addEventListener("click", setProgressBar);

// ---------- Modal ----------
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    pauseSong();
});

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
        pauseSong();
    }
});

// ---------- Load Song List ----------
songs.forEach((song, index) => {
    const songDiv = document.createElement("div");
    songDiv.classList.add("song-item");

    const img = document.createElement("img");
    img.src = song.cover;
    img.alt = song.displayname;

    const title = document.createElement("h3");
    title.textContent = song.displayname;

    songDiv.appendChild(img);
    songDiv.appendChild(title);
    mainMusic.appendChild(songDiv);

    img.addEventListener("click", () => {
        modal.style.display = "flex";
        songIndex = index;
        loadSong(songs[songIndex]);
    
        music.currentTime = 0;
    
        music.play().then(() => {
            isPlaying = true;
            playBtn.classList.replace("fa-play", "fa-pause");
            playBtn.setAttribute("title", "Pause");
        }).catch((err) => {
            console.log("Autoplay prevented: ", err);
        });
    });
    
});

// ---------- Load first song on page load ----------
loadSong(songs[songIndex]);

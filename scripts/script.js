
let audio = document.querySelector("#audio");
let time_bar = document.querySelector("#time_bar");
// funções do controle de player
function play() {
  audio.play();
}

function pause() {
  audio.pause();
}

function stop_music() {
  audio.pause();
  audio.currentTime = 0;
}

function rewind() {
  audio.playbackRate -= 0.2;
}

function forward() {
  audio.playbackRate += 0.2;
}

function volume_down() {
  audio.volume -= 0.2;
}

function volme_up() {
  audio.volume += 0.2;
}
// fim das funções de player
// barra de progresso
function progress_bar(event) {
  let percentage = Math.floor((event.offsetX / time_bar.offsetWidth) * 100);
  audio.currentTime = audio.duration * percentage / 100;
  time_bar.value = audio.currentTime;
}
// mostrar os minutos e segundos da música
function timeUpdate() {
  const progressBar = document.getElementById("time_bar");
  const timeLabel = document.getElementsByClassName("time")[0];

  const currentTime = audio.currentTime;
  progressBar.value = currentTime ; audio.duration * 100;

  const minutes = Math.floor(currentTime / 60);
  const formateMinutes = (minutes < 10 ? "0" : "") + minutes;
  const seconds = Math.floor(currentTime % 60);
  const formatedSeconds = (seconds < 10 ? "0" : "") + seconds;
  timeLabel.innerHTML = formateMinutes + ":" + formatedSeconds;

  setInterval(timeUpdate, 1000);
}




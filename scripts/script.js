
let audio = document.querySelector("#audio");

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
// fim das funções do player
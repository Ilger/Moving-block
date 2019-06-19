


// get canvas element
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;

// background image
let bgReady = false;
let bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
  console.log('loaded');
  bgImage.src = './assets/img/backgroundblockgame.png';
};

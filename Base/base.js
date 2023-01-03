// Preconnect - canvas
var canvas = document.querySelector('canvas');

canvas.width = 1280;
canvas.height = 720;

var c = canvas.getContext('2d');

//Laying out foundation for audio/video feed
c.fillStyle = "rgb(0,0,0,0.9)";
c.font = '12px arial';
c.textAlign = 'left';
c.fillText('Testing - audio, video platform 0.1a', 25, 35);
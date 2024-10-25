const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 1200;
canvas.height = 300;

// Set background color
ctx.fillStyle = '#000033';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Set text color
ctx.fillStyle = '#ffd700';

// Define font
ctx.font = '70px Arial';

// Draw logo
ctx.beginPath();
ctx.moveTo(250, 100);
ctx.lineTo(350, 200);
ctx.lineTo(450, 100);
ctx.lineTo(350, 0);
ctx.closePath();
ctx.stroke();

// Draw text
ctx.fillText('LOL ESPORTS', 380, 170);

// Display canvas
document.body.appendChild(canvas);
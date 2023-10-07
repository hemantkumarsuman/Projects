//psuedo code

// Select the elements on the page - canvas, shake button
// set up our canvas for drawing
// write a draw function
// write a handler for the keys
// clear or shake function
// listen for arrow keys


//grab the canvas
const canvas = document.querySelector('#etch-a-sketch');

//grab the context of canvas
const ctx = canvas.getContext('2d');

//grab the shake button
const shakebutton = document.querySelector('.shake');

//Now we have all of the different elements we want.
//Now we need to setup our canvas for drawing.
//We will just set a couple of defaults on the canvas.
//these  ensure smooth drawing
ctx.lineJoin = "round";
ctx.lineCap = "round";

//Set line width
ctx.lineWidth='10';
//start drawing
//ctx.beginPath();

//place dot at (200,200)=>you will see a dot 200 pixels over and 200 pixels down.
//ctx.moveTo(200,200);
//ctx.lineTo(200,200);
//ctx.stroke();

//How can you pick a random spot in this Etch-a-Sketch?
const width=canvas.width;
const height=canvas.height;
console.log(width,height);

let x = Math.floor(Math.random()*width)
let y = Math.floor(Math.random()*height);
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();
const moveAmount=10;

//write a handler for the keys
//When we hit arrow keys page is also scrolling(default behavior),to prevent this we use preventDefault()
//But when we use preventDefault() it will apply to all keys of keyboard
//We want to prevent only for arrow key=>we will use if
function handleKeys(e){
    if(e.key.includes('Arrow'))
    {
        e.preventDefault()
        draw({key : e.key})
        console.log(e.key);
        console.log("Handle keydown");
    }
}

function draw(options)
{
    console.log(options.key);
    ctx.beginPath();
    ctx.moveTo(x,y);
    if(options.key==='ArrowUp')
    {
        y-=moveAmount;
    }
    else if(options.key==='ArrowRight')
    {
        x+=moveAmount;
    }
    else if(options.key==='ArrowDown')
    {
        y+=moveAmount;
    }
    else{
        x-=moveAmount;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}

function clearCanvas() 
{
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener(
      'animationend',
      function() {
        console.log('Done the shake!');
        canvas.classList.remove('shake');
      },
      { once: true }
    );
}
window.addEventListener('keydown',handleKeys);
shakebutton.addEventListener('click', clearCanvas);
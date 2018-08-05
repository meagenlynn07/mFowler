//index.html
//below creates the text that appears to write to screen 
var i = 0;
var txt = 'M. Fowler'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

//scroll down
function scrollWin(x, y) {
  window.scrollBy(x, y);
}
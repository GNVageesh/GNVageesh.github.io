var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("myname").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
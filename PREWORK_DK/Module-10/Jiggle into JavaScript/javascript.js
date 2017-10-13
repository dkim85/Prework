var box = document.getElementById("box");


document.getElementById("button1").addEventListener("click", function() {
    var height = box.offsetHeight;
    var growth = height + 250;
    box.style.height = growth + 'px';

});
document.getElementById("button2").addEventListener("click", function() {

  box.style.backgroundColor = "blue";
});
document.getElementById("button3").addEventListener("click", function() {

  box.style.opacity = 0.2;
});
document.getElementById("button4").addEventListener("click", function() {

  box.reset = location.reload();
});
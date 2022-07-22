

function hover(aa, state){
    var li = document.getElementsByTagName("li");
    var span = li[aa].children[1];

    state == true?  span.style.backgroundColor = "#0E86D4": span.style.backgroundColor = '#055C9D';
}
function type() {
    var options = {
        strings: ["back-end", "front-end", "full-stack"],
        typeSpeed: 70,
        backSpeed: 25,
        loop: true
    };

    new Typed(".auto-type", options);
}
function hab(id, state) {
    var comp = document.getElementById(id);

    var p = document.getElementsByClassName(id);

    state == true? p[0].hidden = false: p[0].hidden = true;
}
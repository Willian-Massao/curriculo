

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

    var layer3 = document.getElementById("layer3");
    var layer2 = document.getElementById("layer2");
    var layer1 = document.getElementById("layer1");

    addEventListener('scroll', function(){
        var value = window.scrollY;

        layer3.style.top = `${-value * 0.00}px`;
        layer2.style.top = `${-value * 0.10}px`;
        layer1.style.top = `${-value * 0.50}px`;
    });
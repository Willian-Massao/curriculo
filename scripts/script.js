

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
    var layer5 = document.getElementById("layer5");
    var layer4e = document.getElementById("layer4e");
    var layer4d = document.getElementById("layer4d");
    var layer3 = document.getElementById("layer3");
    var layer2 = document.getElementById("layer2");
    var layer1 = document.getElementById("layer1");

    addEventListener('scroll', function(){
        var value = window.scrollY;

        layer5.style.left = `${-value * 1}px`;
        layer5.style.bottom = `${-value * 0.3}px`;
        layer4e.style.left = `${-value * 0.6}px`;
        layer4d.style.right = `${-value * 0.6}px`;
        layer3.style.top = `${-value * 0.00}px`;
        layer2.style.top = `${-value * 0.15}px`;
        layer1.style.top = `${-value * 0.50}px`;
    });
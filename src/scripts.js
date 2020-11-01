function flipCard() {
    var element = document.getElementById('flip-card-inner');

    var flip_class = 'flip-180';

    //if it has the 180 class, remove it, if it doesn't have it, then add it

    if (element.classList.contains(flip_class)) {
        element.classList.remove(flip_class);
    } else {
        element.classList.add(flip_class);
    }
}

function tCButtonGlow() {
    var element = document.getElementById('T&C');

    var glow_class = 'glow';

    if (element.classList.contains(glow_class)) {
        element.classList.remove(glow_class);
    } else {
        element.classList.add(glow_class);
    }
}

function backButtonGlow() {
    var element = document.getElementById('back');

    var glow_class = 'glow';

    if (element.classList.contains(glow_class)) {
        element.classList.remove(glow_class);
    } else {
        element.classList.add(glow_class);
    }
}

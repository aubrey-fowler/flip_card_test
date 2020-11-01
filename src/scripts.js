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

function buttonGlow() {
    //find the Ts&Cs button and add a glow
    //find the back button and make it glow
    // var element = document.getElementById('flip-card-inner');
    // var flip_class = 'flip-180';
    // //if it has the 180 class, remove it, if it doesn't have it, then add it
    // if (element.classList.contains(flip_class)) {
    //     element.classList.remove(flip_class);
    // } else {
    //     element.classList.add(flip_class);
    // }
}

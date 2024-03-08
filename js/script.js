AOS.init();

document.getElementById("radio1").checked = true;

let count = 1;

setInterval( function(){
    nextImage();
}, 4000);

function nextImage() {
    count++;
    if(count > 4) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
};

window.sr = ScrollReveal({ reset: true });

sr.reveal('.hero-text', { duration: 5000 });
sr.reveal('.imgAbout', { duration: 3000 });
sr.reveal('.about-text', { duration: 3000 });
sr.reveal('.slider-content', { duration: 3000 });
sr.reveal('.mundi', { duration: 3000 });



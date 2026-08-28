const audio = document.getElementById("song");
const playMessage = document.getElementById("playMessage");

let musicStarted = false;

function startMusic() {

    if (musicStarted) {
        return;
    }

    musicStarted = true;

    audio.play()
        .then(() => {
            console.log("Music started!");

            // Remove the message
            playMessage.style.display = "none";
        })
        .catch((error) => {
            console.error("Could not play audio:", error);
            musicStarted = false;
        });
}


// Touch
document.addEventListener("touchstart", startMusic, {
    once: true,
    passive: true
});


// Mouse click
document.addEventListener("click", startMusic, {
    once: true
});


// Scrolling
document.addEventListener("scroll", startMusic, {
    once: true,
    passive: true
});


// Mouse wheel
document.addEventListener("wheel", startMusic, {
    once: true,
    passive: true
});

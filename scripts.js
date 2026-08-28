document.addEventListener("DOMContentLoaded", function () {

    const audio = document.getElementById("welcomeAudio");
    const playButton = document.getElementById("playButton");

    // Try to play automatically when page loads
    audio.play()
        .then(() => {
            console.log("Audio started automatically.");
        })
        .catch((error) => {
            console.log("Autoplay was blocked by the browser.");

            // Show button if autoplay is blocked
            playButton.style.display = "block";
        });

    // Play audio after user interaction
    playButton.addEventListener("click", function () {
        audio.play()
            .then(() => {
                playButton.style.display = "none";
            })
            .catch((error) => {
                console.error("Audio playback failed:", error);
            });
    });

});
const videosBackground =
    document.getElementById("VideosBackground");
const Video = document.querySelectorAll(".video");
const VideoSnippet =
    document.getElementById("VideoInformation");

let posX,
    posY,
    activePoppover = false;

const onEnter = (ev) => {
    ev.preventDefault();
    if (!activePoppover) {
        activePoppover = true;
        posX = ev.clientX;
        posY = ev.clientY;
        VideoSnippet.style.display = "block";
        VideoSnippet.classList.add('selected')
    } else {
        activePoppover = false;
        VideoSnippet.style.display = "none";
        VideoSnippet.classList.remove('selected')
    }

    if (
        posX + VideoSnippet.clientWidth + 30 <
        videosBackground.clientWidth
    ) {
        VideoSnippet.style.left = `${posX}px`;
        VideoSnippet.style.top = `${posY}px`;
        VideoSnippet.style.transform = `translate(15%, -50%)`;
    } else {
        VideoSnippet.style.left = `${posX}px`;
        VideoSnippet.style.top = `${posY}px`;
        VideoSnippet.style.transform = `translate(-100%, -50%)`;
    }
};

Video.forEach((video) => {
    video.addEventListener("click", onEnter);
    video.addEventListener("contextmenu", onEnter);
});
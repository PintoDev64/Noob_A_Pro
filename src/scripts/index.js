const videosBackground = document.getElementById("VideosBackground");
const Video = document.querySelectorAll(".video");
const VideoSnippet = document.getElementById("VideoInformation");
const VideoURL = document.getElementById("VideoURL");

let posX,
    posY,
    activePoppover = false;

const onEnter = (ev) => {
    console.log(ev.target.childNodes[0].id);
    ev.preventDefault();
    if (!activePoppover) {
        activePoppover = true;
        posX = ev.clientX;
        posY = ev.clientY;
        VideoURL.setAttribute("href", `https://www.youtube.com/watch?v=${ev.target.childNodes[0].id}`)
        VideoSnippet.style.display = "block";
    } else {
        activePoppover = false;
        VideoSnippet.style.display = "none";
    }

    if (
        posX + VideoSnippet.offsetWidth + 30 <
        videosBackground.offsetWidth
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
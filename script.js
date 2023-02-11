let currVid = 1;
let musicOpen = true;

function changeVideo(dir) {
    let vid1 = document.getElementById("video1");
    let vid2 = document.getElementById("video2");
    let vid3 = document.getElementById("video3");
    let vid4 = document.getElementById("video4");

    if(dir == 0) {
        currVid--;
        if(currVid == 0) currVid = 4;
    } else if (dir == 1) {
        currVid++;
        if(currVid == 5) currVid = 1;
    }

    switch(currVid) {
        case 1:
            vid1.style.display = "block";
            vid2.style.display = "none";
            vid3.style.display = "none";
            vid4.style.display = "none";
            vid1.style.opacity = "100%";
            vid2.style.opacity = "0%";
            vid3.style.opacity = "0%";
            vid4.style.opacity = "0%";
            break;
        case 2:
            vid1.style.display = "none";
            vid2.style.display = "block";
            vid3.style.display = "none";
            vid4.style.display = "none";
            vid1.style.opacity = "0%";
            vid2.style.opacity = "100%";
            vid3.style.opacity = "0%";
            vid4.style.opacity = "0%";
            break;
        case 3:
            vid1.style.display = "none";
            vid2.style.display = "none";
            vid3.style.display = "block";
            vid4.style.display = "none";
            vid1.style.opacity = "0%";
            vid2.style.opacity = "0%";
            vid3.style.opacity = "100%";
            vid4.style.opacity = "0%";
            break;
        case 4:
            vid1.style.display = "none";
            vid2.style.display = "none";
            vid3.style.display = "none";
            vid4.style.display = "block";
            vid1.style.opacity = "0%";
            vid2.style.opacity = "0%";
            vid3.style.opacity = "0%";
            vid4.style.opacity = "100%";
            break;
        default:
            break;
    }
}

function toggleMusic(mO) {
    if (mO == true) {
        document.getElementById("leftmusic").style.left = "0px";
        document.getElementById("rightmusic").style.right = "0px";
    } else {
        document.getElementById("leftmusic").style.left = "-"+window.innerWidth/2+"px";
        document.getElementById("rightmusic").style.right = "-"+window.innerWidth/2+"px";
    }
}

document.getElementById("btnleft").addEventListener("click", function() {changeVideo(0)});
document.getElementById("btnright").addEventListener("click", function() {changeVideo(1)});
document.getElementById("musicbtn").addEventListener("click", function() {
    musicOpen = !musicOpen;
    toggleMusic(musicOpen)
});

//resize listener
window.addEventListener("resize", function() {
    if(window.innerWidth < 600) {
        musicOpen = false;
    } else {
        musicOpen = true;
    }
    toggleMusic(musicOpen);
});

//onload, if width<600, do same as above
window.onload = function() {
    if(window.innerWidth < 600) {
        musicOpen = false;
    } else {
        musicOpen = true;
    }
    toggleMusic(musicOpen);
}
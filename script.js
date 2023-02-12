/*window.addEventListener("resize", function() {});

window.onload = function() {}*/

let currVid = 1;
function changeVid(dir) {
    let vc = document.getElementById("vidcontainer");
    let v1 = document.getElementById("v1");
    let v2 = document.getElementById("v2");
    let v3 = document.getElementById("v3");
    let v4 = document.getElementById("v4");

    if(dir == 0) {
        currVid--;
        if(currVid < 1) {
            currVid = 4;
        }
    } else if(dir == 1) {
        currVid++;
        if(currVid > 4) {
            currVid = 1;
        }
    }

    switch (currVid) {
        case 1:
            v1.style.display = "block";
            v2.style.display = "none";
            v3.style.display = "none";
            v4.style.display = "none";
            vc.style.paddingTop = "28.125%";
            break;
        case 2:
            v1.style.display = "none";
            v2.style.display = "block";
            v3.style.display = "none";
            v4.style.display = "none";
            vc.style.paddingTop = "28.125%";
            break;
        case 3:
            v1.style.display = "none";
            v2.style.display = "none";
            v3.style.display = "block";
            v4.style.display = "none";
            vc.style.paddingTop = "37.5%";
            break;
        case 4:
            v1.style.display = "none";
            v2.style.display = "none";
            v3.style.display = "none";
            v4.style.display = "block";
            vc.style.paddingTop = "31.25%";
            break;
        default:
            v1.style.display = "block";
            v2.style.display = "none";
            v3.style.display = "none";
            v4.style.display = "none";
            vc.style.paddingTop = "28.125%";
            break;
    }
}
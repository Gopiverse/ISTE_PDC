// document.documentElement.style.cursor = 'none';
// const cursor = document.querySelector(".cursor");
// var timeout;
// document.addEventListener("mousemove", (e) => {
//     let x = e.pageX;
//     let y = e.pageY;
//     cursor.style.top = y + "px";
//     cursor.style.left = x + "px";
//     cursor.style.display = "block";

//     function mouseStopped() {
//         cursor.style.display = "none";
//     }
//     clearTimeout(timeout);
//     timeout = setTimeout(mouseStopped, 1000);
    
// });

// document.addEventListener("mouseout", () => {
//     cursor.style.display = none;
// });

// Hide default cursor and use custom one
// Hide default cursor and use custom one
document.documentElement.style.cursor = 'none';

// Cursor logic
document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".cursor");
    const trailContainer = document.querySelector(".trail-container");
    let circles = [];

    // Create trailing circles
    for (let i = 0; i < 10; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        trailContainer.appendChild(circle);
        circles.push(circle);
    }

    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        // Move main cursor
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        cursor.style.display = "block";

        // Trail animation
        circles.forEach((circle, index) => {
            setTimeout(() => {
                circle.style.left = `${x}px`;
                circle.style.top = `${y}px`;
                circle.style.transform = `translate(-50%, -50%) scale(${1 - index * 0.1})`;
                circle.style.opacity = `${1 - index * 0.1}`;
            }, index * 30);
        });
    });

    // Hide cursor when leaving the page
    document.addEventListener("mouseout", () => {
        cursor.style.display = "none";
    });
});

// Preloader
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

    setTimeout(() => {
        if (content) content.style.display = "block";
    }, 6000); // Should match any CSS transitions
});

// Background music logic
document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = new Audio("sounds/background.mp3");
    bgMusic.loop = true;

    const muteToggle = document.getElementById("mute-toggle");

    function startMusicOnce() {
        bgMusic.play();
        document.removeEventListener("click", startMusicOnce);
    }
    document.addEventListener("click", startMusicOnce);

    muteToggle.addEventListener("click", function () {
        if (bgMusic.muted) {
            bgMusic.muted = false;
            muteToggle.textContent = "🔊";
        } else {
            bgMusic.muted = true;
            muteToggle.textContent = "🔇";
        }
    });
});


// Responsive navbar toggle
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

window.onload = () => {
    if (window.innerWidth < 895) {
        navbar.classList.remove("active");
    }
};

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
});

document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
    }
});

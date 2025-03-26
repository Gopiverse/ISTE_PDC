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

window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    // Apply fade-out effect
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

    // Show content after the fade-out effect
    setTimeout(() => {
        content.style.display = "block";
    }, 6000); // Match this delay to the CSS transition duration
});

/*

        const cursor = document.getElementById('custom-cursor');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
*/

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".cursor");
    const trailContainer = document.querySelector(".trail-container");
    let circles = [];

    // Create multiple trail circles
    for (let i = 0; i < 10; i++) {
        let circle = document.createElement("div");
        circle.classList.add("circle");
        trailContainer.appendChild(circle);
        circles.push(circle);
    }

    document.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;

        // Move the main cursor
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;

        // Move the trailing circles with delay effect
        circles.forEach((circle, index) => {
            setTimeout(() => {
                circle.style.left = `${x}px`;
                circle.style.top = `${y}px`;
                circle.style.transform = `translate(-50%, -50%) scale(${1 - index * 0.1})`;
                circle.style.opacity = `${1 - index * 0.1}`;
            }, index * 30); // Delay each circle slightly
        });
    });
});















        
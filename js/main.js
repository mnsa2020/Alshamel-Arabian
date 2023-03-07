// go to top
let topIcon = document.querySelector(".up");

window.onscroll = function() {
    if (this.scrollY >= 800) {
        topIcon.classList.add("show");
    } else {
        topIcon.classList.remove("show");
    }
};

topIcon.onclick = function() {
    window.scrollTo( {
        top: 0,
        behavior: "smooth",
    });
};
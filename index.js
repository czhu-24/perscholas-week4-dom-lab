// #11
const h1El = document.querySelector("h1");
h1El.textContent = "GOOD NIGHT WORLD";

// #14 & 15

const hideBtnEl = document.getElementById("hide-btn");
hideBtnEl.addEventListener("click", () => {
    h1El.style.display = "none";
});

// #18 & 19
const unhideBtnEl = document.getElementById("unhide-btn");
unhideBtnEl.addEventListener("click", () => {
    h1El.style.display = "block"; // turn it back to normal
});


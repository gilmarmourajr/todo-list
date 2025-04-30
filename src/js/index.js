import "../style.css";
import homeLoad from "./home.js";
import menuLoad from "./menu.js";
import contactLoad from "./contact.js";

homeLoad();
eventListeners();

function clear () {
    document.getElementById("content").innerHTML = '';
}

function eventListeners () {
    document.getElementById("homeBtn").addEventListener("click", () => {
        clear();
        homeLoad();
    });

    document.getElementById("menuBtn").addEventListener("click", () => {
        clear();
        menuLoad();
    });

    document.getElementById("contactBtn").addEventListener("click", () => {
        clear();
        contactLoad();
    })
}
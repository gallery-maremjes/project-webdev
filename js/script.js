/* Mario Petrizzelli
Group Project */

/* Creating of global variables to be used across all functions */
/* Documentation: https://www.w3schools.com/jsref/met_document_queryselector.asp */
const today = new Date;
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Get date */
function date() {
    /* Get date information from Date. Documentation: https://www.w3schools.com/js/js_date_methods.asp */
    var date = today.getDate();
    var dayIndex = today.getDay();
    var monthIndex = today.getMonth();
    var year = today.getFullYear();

    const daysOuput = ["Sunday", "Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday"];
    const monthsOutput = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("date-bar").innerHTML = "<i class='fas fa-calendar'></i> &nbsp" + daysOuput[dayIndex] + ", " + date + " " + monthsOutput[monthIndex] + " " + year + " | Dublin, Ireland";
}

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
    }
    item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);

/* Mario Petrizzelli
Group Project */

/* Creating of global variables to be used across all functions */
/* Documentation: https://www.w3schools.com/jsref/met_document_queryselector.asp */
const today = new Date;
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const form = document.getElementById("form");
const submit = document.getElementById("submit");

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

/* Toggle mobile menu. The icon changes based on the event. */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

/* Newsletter e-mail verification */
function emailVerification() {
    const email = document.getElementById("email").value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{3}$/;
    if (email.match(pattern)) {
        form.classList.add('ok');
        form.classList.remove('notOk');
        document.getElementById("checker").innerHTML = " This email is correct";
    } else {
        form.classList.add('notOk');
        form.classList.remove('ok');
        document.getElementById("checker").innerHTML = " Please check your email";
    }
    if (email == "") {
        form.classList.remove('notOk');
        form.classList.remove('ok');
        document.getElementById("checker").innerHTML = "";
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

/* Newlsetter submission */
function submitNewsletter() {
    form.addEventListener("submit", preventRefresh);
    alert("Thank you. You'll receive our brouchure in your " + document.getElementById("email").value + " inbox shortly.");
}

/* Page refresh prevention */
function preventRefresh(event) {
    event.preventDefault();
}
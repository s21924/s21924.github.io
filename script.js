// menu
function toggleMenuIcon(x) {
    x.classList.toggle("change");
}
const navbar = document.querySelector(".navbar");
const activeElementNavBar = document.querySelectorAll(".active")
navbar.addEventListener("click", function (){
    for (let i = 0; i<activeElementNavBar.length; i++) {
        console.log(i);
        activeElementNavBar[i].classList.toggle("show");
    }
})

// slider header

let activeElement = 0;
const timeChange = 4000;

const colorImgHtml = document.querySelector('.image_background');
const h1Html = document.querySelector('.description h1');
const h2Html = document.querySelector('.description h2');

//Informacje w tablicach o elementach podmienianych
const Images = ['img/alpine-village-4676673_1280.jpg', 'img/istockphoto-512882668-1024x1024.jpg', 'img/istockphoto-585064444-1024x1024.jpg'];
const description = ['Fajny hotel', 'Super hotel', 'Jakiś opis'];
const reviews = ['Gorąco polecam', '10/10', 'coś tam'];

function changeElement() {
    activeElement++;
    if (activeElement == Images.length) {
        activeElement = 0;
    }
    colorImgHtml.src = Images[activeElement];
    h1Html.textContent = description[activeElement];
    h2Html.textContent = reviews[activeElement];
}

setInterval(changeElement, timeChange)

// lightbox


function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

// popup

// popup.addEventListener("click", popUp);

function myFunction1() {
    var popup = document.getElementById("myPopupFirst")
    popup.classList.toggle("show");
}
function myFunction2() {
    var popup = document.getElementById("myPopupSecond")
    popup.classList.toggle("show");
}
function myFunction3() {
    var popup = document.getElementById("myPopupThird")
    popup.classList.toggle("show");
}
function myFunction4() {
    var popup = document.getElementById("myPopupFourth")
    popup.classList.toggle("show");
}


let submitForm = document.querySelector(".submitForm")

let today = new Date().setHours(0,0,0,0);;
submitForm.addEventListener('click', validateForm);
function validateForm() {
    let nameValue = document.forms["myForm"]["fname"].value;
    let lnameValue = document.forms["myForm"]["lname"].value;
    let emailValue = document.forms["myForm"]["e-mail"].value;
    let bDateValue = document.forms["myForm"]["beginningDate"].value;
    let eDateValue = document.forms["myForm"]["endingDate"].value;
    let myBDate = new Date(bDateValue).setHours(0,0,0,0);
    let myEDate = new Date(eDateValue).setHours(0,0,0,0);;


    if (nameValue == "") {
        alert("Należy wypełnić polę imię");
    }
    if (lnameValue == "") {
        alert("Należy wypełnić polę nazwisko");
    }
    if (emailValue == "") {
        alert("Należy wypełnić polę e-mail");
    }
    if (bDateValue == "") {
        alert("Należy wypełnić polę daty początku pobytu");
    }
    if (myBDate < today) {
        alert("Data początkowa nie może być wcześniejsza niż dzisiaj")
    }
    if (myEDate < myBDate) {
        alert("Data zakończenia pobytu nie może być wcześniejsza niż data rozpoczęcia pobytu")
    }
    if (eDateValue == "") {
        alert("Należy wypełnić polę daty końca pobytu");
    }
}
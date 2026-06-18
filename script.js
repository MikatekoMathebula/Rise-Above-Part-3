const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit", function(event){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){

        alert("Please complete all fields.");

        event.preventDefault();
    }
    else{

        alert("Message sent successfully!");
    }

});

}

const newsletter = document.getElementById("newsletterForm");

if(newsletter){

newsletter.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Thank you for subscribing!");

});

}

const donationForm = document.getElementById("donationForm");

if(donationForm){

donationForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Thank you for supporting Rise Above!");

});

}

const topBtn = document.getElementById("topBtn");

if(topBtn){

    topBtn.addEventListener("click", function(){

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

document.getElementById("year").innerHTML =
new Date().getFullYear();

const amount = document.getElementById("donationAmount");

if(amount){

amount.addEventListener("change", function(){

document.getElementById("selectedAmount").innerHTML =
"You selected R" + amount.value;

});

}
const images = document.querySelectorAll(".gallery-image");

images.forEach(function(img){

img.addEventListener("click", function(){

window.open(img.src);

});

});

const darkBtn =
document.getElementById("darkMode");

if(darkBtn){

darkBtn.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

});

}

document.getElementById("today").innerHTML =
new Date().toDateString();
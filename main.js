// navbar toggle for movile
const navbar= document.getElementById("navbar");
const navToggleBtn= document.getElementById("toggle");

navToggleBtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
});

const enterWeb = document.getElementById("enter-website");
let mainContainer = document.querySelector('.centered-container');

enterWeb.addEventListener("click",()=>{
    mainContainer.style.animation = 'fadeOut 1.5s forwards';
    setTimeout(function() {
        // Changer de document HTML
        window.location.href = 'index.html';
    }, 1500);

})
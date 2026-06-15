const shareCont = document.querySelector(".share-container");
const shareBtn = document.querySelector(".share-icon-wrapper")
const postInfoCont = document.querySelector(".post-info-container");
const shareIcon = document.querySelector(".share-icon");


shareBtn.addEventListener("click", ()=>{
    shareCont.classList.toggle("active");
    shareBtn.classList.toggle("active");
    shareIcon.classList.toggle("active")

})
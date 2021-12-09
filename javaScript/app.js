// variables
let listItems = document.querySelectorAll("li");
let certificates = document.querySelector(".certificates");
let PORTFOLIO = document.querySelector("#PORTFOLIO");
let generalSkills =document.querySelector("#GENERAL-SKILLS");
let sections = [certificates,PORTFOLIO,generalSkills];


// function
for (let i=0; i<=2; i++){
    listItems[i].addEventListener("click", function(){
    sections[i].scrollIntoView({behavior: "smooth"})
})
}
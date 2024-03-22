import {image} from "./img.js"
import {info} from "./info.js"
import {cards} from "./card.js"

const myObj1 = {
    title : "My Projects", 
    disc : "Welcome to my projects, where I transform code into instructions computers can understand. These projects are important and it is part of my journey as an IT student. ",
    btn : "About me",
    myimg : "myprofile.jpg"
}

const myObj2 = {
    comp : "Project Completed",

    img1 : "project1.jpg",
    dis1 : "This project life size personal computer  created on last semester as our final output.",
    btn1 : "Learn More",

    img2 : "project2.jpg",
    dis2 : "This project was a business defense. Our project is all about editing pictures and videos.",
    btn2 : "Learn More",

    img3 : "project3.jpg",
    dis3 : "This project is a basic php website where users can signup and log in.",
    btn3 : "Learn More"
}

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

const {title,disc,btn,myimg} = myObj1;

const {comp,img1,dis1,btn1,img2,dis2,btn2,img3,dis3,btn3} = myObj2;

sectionOne.append(info(title,disc,btn))
sectionOne.append(image(myimg))  

sectionTwo.append(cards(comp,img1,dis1,btn1,img2,dis2,btn2,img3,dis3,btn3))




import {image} from "./img.js"
import {info} from "./info.js"
import {cards} from "./card.js"

const myObj1 = {
    title : "My Projects", 
    disc : "Welcome to my projects! These projects are important for my journey as an IT student. They help me learn and grow. Each project teaches me something new. Let's explore together!",
    btn : "About me",
    myimg : "myprofile.jpg"
}

const myObj2 = {
    comp : "Project Completed",

    img1 : "project1.jpg",
    dis1 : "This project, called Life-Size Personal Computer, was created during our final semester in the year 2023. It was our ultimate achievement, representing months of hard work and dedication.",
    btn1 : "Learn More",

    img2 : "project2.jpg",
    dis2 : "This project was called Business Defense. Our focus was editing pictures and videos. We aimed to enhance visual content for various business needs.",
    btn2 : "Learn More",

    img3 : "project3.jpg",
    dis3 : "This project is a basic PHP website where users can sign up and log in. It stores data in a database, allowing users to securely access their accounts.",
    btn3 : "Learn More"
}

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

const {title,disc,btn,myimg} = myObj1;

const {comp,img1,dis1,btn1,img2,dis2,btn2,img3,dis3,btn3} = myObj2;

sectionOne.append(info(title,disc,btn))
sectionOne.append(image(myimg))  

sectionTwo.append(cards(comp,img1,dis1,btn1,img2,dis2,btn2,img3,dis3,btn3))




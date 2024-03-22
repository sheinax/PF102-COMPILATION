
import{leftDiv} from "./info.js"
import{rightDiv} from "./img.js"


// e get ang container
let container = document.getElementById("container")

let MyObject  ={

   
    title: "Introduction",
    title1: "My Journey",
    paragraph: "Welcome to my portfolio! My name is Sheina Mae Labadan. I am a BSIT student, and thank you for visiting my website. I have experienced moments of doubt, fear, and harwork to achieve this project. ",
    paragraph1: "I worked hard on each project, setting goals and sticking to them. I researched, planned, and took one step at a time, overcoming obstacles along the way. Through hardwork, I completed each task, learning and growing with every challenge.",
    img: "me.jpg",
    button1: "About Me",
    button2: "Contact Me",
    button3: "Details",
    button4: "More Info"
    

}

const {  title,title1, paragraph,paragraph1, img,  button1, button2,  button3, button4} = MyObject




container.append(leftDiv(title,title1, paragraph,paragraph1,button1, button2, button3, button4 ))

container.append(rightDiv(img))




import{leftDiv} from "./info.js"
import{rightDiv} from "./img.js"


// e get ang container
let container = document.getElementById("container")

let MyObject  ={

   
    title: "Introduction",
    title1: "My Journey",
    paragraph: "Welcome to my portfolio! I'm Sheina Mae Labadan. Thanks for visiting my website. I'm a BSIT student and I love exploring technology and creativity. This portfolio shows my projects. I used JavaScript, HTML, and CSS for them.This is not only for programming but also I have a different kinds of project. Take a look around and I hope you'll appreciate it!",
    paragraph1: " Being an IT student is so difficult specially when you don't have a personal computer and it is not easy when there is something wrong with your code and it takes time to debug it. I have experienced moments of doubt and fear to achieve these projects. I worked hard on each projects, setting goals and sticking to them. Through hardwork, I completed each task, learning and growing with every challenges.",
    img: "me.jpg",
    button1: "About Me",
    button2: "Contact Me",
    button3: "Details",
    button4: "More Info"
    

}

const {  title,title1, paragraph,paragraph1, img,  button1, button2,  button3, button4} = MyObject




container.append(leftDiv(title,title1, paragraph,paragraph1,button1, button2, button3, button4 ))

container.append(rightDiv(img))



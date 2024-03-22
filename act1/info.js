


const leftDiv = ( title,title1, paragraph,paragraph1,button1,button2,button3,button4 ) =>{
    let div = document.createElement("div")
    div.className = " classLeft"
    div.innerHTML =  ` 
                     <h1> ${title}</h1> <br>                  
                     <p> ${paragraph} </p> <br>
                     <h1> ${title1}</h1> <br>                  
                     <p> ${paragraph1} </p> <br>
                     
                     <button> About Me</button> 
                     <button> Contact Me</button> 
                     <button> Details</button>
                     <button> More Info</button> 
                     

                          </div>

                     `


    
    return div

}
export{leftDiv}
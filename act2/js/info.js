const info = (a,b,c,) => {
    let div = document.createElement("div")
    div.className ="info"
    div.innerHTML = `<h1>${a}</h1> <br>
                    <p>${b}</p>     
                    <button>${c}</button>
    
    `
    return div
}

export{info}
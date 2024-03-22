const rightDiv = (img) => {
    let div = document.createElement("div")
    div.className = "classRight"
    div.innerHTML = ` <img src = "./picture/${img}">`

    return div




}

export{rightDiv}
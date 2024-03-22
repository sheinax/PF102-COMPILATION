const image = (img) => {

    let div = document.createElement("div")
    div.innerHTML = `<img src="./img/${img}" class="pic1">`

    return div
}

export{image}
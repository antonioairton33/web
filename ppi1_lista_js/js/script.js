function alteracor() {

    let cor = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;
    console.log(cor);

    document.body.style.backgroundColor = cor;
}

function randColor() {
    return Math.floor(Math.random() * 256);
}

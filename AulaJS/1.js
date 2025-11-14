function bla(){
    console.log("Olá mundão perdido!")
}

b=document.querySelector("button:nth-child(4)");
b.innerHTML="Click em mim"
b.addEventListener("click", bla);

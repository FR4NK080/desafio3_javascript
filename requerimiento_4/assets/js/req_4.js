/*4.2*/
const padre = document.querySelector("#padre");
padre.addEventListener("click",(e)=>{
    if((e.target.classList.contains('dimensiones')) === true){
    e.target.classList.toggle("black");
}})
const container = document.querySelector(".container");
const tecla = document.querySelector("#key");
document.body.addEventListener("keydown",(k)=>{
    if(k.key == "a"){
        tecla.style.backgroundColor = "pink";
    }
    else if (k.key == 's'){
        tecla.style.backgroundColor = "orange";
    }
    else if (k.key =='d'){
        tecla.style.backgroundColor = "lightblue";
    }
    else if(k.key == "q"){
        const nuevoP = document.createElement("div");
        container.appendChild(nuevoP);
        nuevoP.style.backgroundColor = "purple";
        nuevoP.style.height = "200px";
        nuevoP.style.width = "200px";
    }
    else if (k.key == 'w'){
        const nuevoG = document.createElement("div");
        container.appendChild(nuevoG);
        nuevoG.style.backgroundColor = "grey";
        nuevoG.style.height = "200px";
        nuevoG.style.width = "200px";
    }
    else if (k.key =='e'){
        const nuevoB = document.createElement("div");
        container.appendChild(nuevoB);
        nuevoB.style.backgroundColor = "brown";
        nuevoB.style.height = "200px";
        nuevoB.style.width = "200px";
    }
    else{
        tecla.style.backgroundColor = "white";
}})
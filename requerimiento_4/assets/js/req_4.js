/*4.2*/
const azul = document.getElementById("azul");
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");

/*4.3*/ 
const tecla = document.querySelector("#key");
document.body.addEventListener("keydown",(k)=>{
    if(k.key == "a"){
        tecla.style.backgroundColor = "pink"
    }
    else if (k.key == 's'){
        tecla.style.backgroundColor = "orange"
    }
    else if (k.key =='d'){
        tecla.style.backgroundColor = "lightblue"
    }
})
/*4.4*/
const container = document.querySelector(".container");
document.body.addEventListener("keydown",(k)=>{
    if(k.key == "q"){
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
})

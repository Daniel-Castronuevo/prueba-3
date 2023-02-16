const rotary = document.querySelector(".rotary-button-brt");
const rotary2 = document.querySelector(".rotary-button-lgts");
rotado = `NO`
rotado2 = `NO`
rotary.addEventListener("click",()=>{
    if(rotado == `NO`){
        rotary.style.transform = `rotate(-60deg)`
        rotado = `MITAD`
    }
    else if(rotado == `MITAD`){
        rotary.style.transform = `rotate(-120deg)`
        rotado = `COMPLETO`
    }
    else{
        rotary.style.transform = `rotate(0deg)`
        rotado = `NO`
    }

})

rotary2.addEventListener("click",()=>{
    if(rotado2 == `NO`){
        rotary2.style.transform = `rotate(-60deg)`
        rotado2 = `MITAD`
    }
    else if(rotado2 == `MITAD`){
        rotary2.style.transform = `rotate(-120deg)`
        rotado2 = `COMPLETO`
    }
    else{
        rotary2.style.transform = `rotate(0deg)`
        rotado2 = `NO`
    }

})
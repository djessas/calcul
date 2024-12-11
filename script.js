var sept = document.getElementById('sept')
var huit = document.getElementById('huit')
var neuf = document.getElementById('neuf')
var multiplication = document.getElementById('multiplication')
var quatre = document.getElementById('quatre')
var cinq = document.getElementById('cinq')
var six = document.getElementById('six')
var divisions = document.getElementById('divisions')
var un = document.getElementById('un')
var deux = document.getElementById('deux')
var trois = document.getElementById('trois')
var addition = document.getElementById('addition')
var effacer = document.getElementById('effacer')
var zero= document.getElementById('zero')
var egal = document.getElementById('egal')
var soustraction = document.getElementById('soustraction')
var calcul = document.getElementById("afficher")
var operateur
var numero1
var numero2
var calculer =(numero1,numero2)=>{
    if (operateur === "+"){
        return(Number(numero1) + Number(numero2));
    }
    else if (operateur==="-"){
        return(Number(numero1) - Number(numero2));
    }
    else if (operateur ==="*"){
        return(Number(numero1) * Number(numero2))
    }
    else if(operateur === "/"){
        return(Number(numero1) / Number(numero2))
    }
    else{
        return("erreur")
    }
}

console.log(sept)
sept.addEventListener("click",()=>{
    calcul.innerText+="7"
})
huit.addEventListener("click",()=>{
    calcul.innerText+="8"
})
neuf.addEventListener("click",()=>{
    calcul.innerText+="9"
})
multiplication.addEventListener("click",()=>{
    numero1 = calcul.textContent
    calcul.textContent=""
    operateur = "*"
})
quatre.addEventListener("click",()=>{
    calcul.innerText+="4"
})
cinq.addEventListener("click",()=>{
    calcul.innerText+="5"
})
six.addEventListener("click",()=>{
    calcul.innerText+="6"
})
divisions.addEventListener("click",()=>{
    numero1 = calcul.textContent
    calcul.textContent=""
    operateur = "/"
})
un.addEventListener("click",()=>{
    calcul.innerText+="1"
})
deux.addEventListener("click",()=>{
    calcul.innerText+="2"
})
trois.addEventListener("click",()=>{
    calcul.innerText+="3"
})
addition.addEventListener("click",()=>{
    numero1 = calcul.textContent
    calcul.textContent=""
    operateur="+"
})
effacer.addEventListener("click",()=>{
    calcul.textContent=""
})
zero.addEventListener("click",()=>{
    calcul.innerText+="0"
})
egal.addEventListener("click",()=>{
    numero2 = calcul.textContent
    calcul.innerText= calculer(numero1,numero2)
    
})
soustraction.addEventListener("click",()=>{
    numero1 = calcul.textContent
    calcul.textContent=""
    operateur = "-"
})
    

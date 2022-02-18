// selection des élément
let input = document.querySelector('input')
let error = document.querySelector('.erreur')
let formulaire = document.querySelector('.formulaire')
let divInstruc = document.querySelector('.instruction')
// cacher les erreur
// console.log(error)
error.style.visibility = "hidden"


// généré un nombre aléatoir
let coups  = 0 ;
let nombreChoisie; 

let numRandom = () => {
    return Math.floor(Math.random() * 1001)
}

let numAléatoire = numRandom();

console.log(numAléatoire)
// vérifier que l'utilisateur rentre bien des nombre

input.addEventListener('keyup', () => {
    console.log(isNaN(input.value))
    if (isNaN(input.value)) {
        error.style.visibility = "visible"
    } else if (input.value == "0" || "1" || "2") {
        error.style.visibility = "hidden"
    }
})

formulaire.addEventListener("submit", (e) =>{
    e.preventDefault()
    if(isNaN(input.value) || input.value == "") {
        input.style.borderColor = "red"
    }else{
        coups++ ;
        nombreChoisie = input.value
        input.style.borderColor = "grey"
        verif(nombreChoisie)
        input.value = '';
    }
})
function verif(num) {
    let instruction = document.createElement('p')
    if (num < numAléatoire) {
        instruction.innerHTML = `coups : ${coups} numéro entrez : ${nombreChoisie} C'est plus`
        instruction.className = "para plus"
        divInstruc.prepend(instruction)
    } else if ( num > numAléatoire) {
        instruction.innerHTML = `coups : ${coups} numéro entrez : ${nombreChoisie} C'est moin`
        instruction.className = "para moin"
        divInstruc.prepend(instruction)
    } else {
        instruction.innerHTML = `coups : ${coups} numéro entrez : ${nombreChoisie} Félicitations vous avez trouvé le juste prix !!`
        instruction.className = "para fini"
        divInstruc.prepend(instruction)
    }
}



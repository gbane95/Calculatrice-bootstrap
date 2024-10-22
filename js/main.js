//Variables pour stocker nos données après calculs
let operateurUtilise = ""
let dernierValeurEntrer = ""

//Notre ecran
let operation = document.getElementById("operation")
let resultat = document.getElementById("resultat")

//On affecte 0 par defaut à notre ecran
resultat.innerHTML = 0


//Bouton clear(recommencer)
let clear = document.querySelector(".clear")
clear.addEventListener("click", function () {
    resultat.innerHTML = 0
    operation.innerHTML = ""
    dernierValeurEntrer = ""
})

//Bouton del pour supprimer un élément
let del = document.querySelector('.del')
del.addEventListener("click", function () {
    if (resultat.innerHTML !== "" && resultat.innerHTML !== "0") {
        //La methode slice permet de supprimer un élément dans notre variable. -1 veut dire supprime le dernier element de la variable
        resultat.innerHTML = resultat.innerHTML.slice(0, -1)
    } else {
        resultat.innerHTML = 0
        dernierValeurEntrer = ""
    }
})

//Bonton pourcentage
let pourcentage = document.querySelector('.pourcentage')
pourcentage.addEventListener("click", function () {
    if (resultat.innerHTML !== "" && resultat.innerHTML !== "0") {
        resultat.innerHTML = Number(resultat.innerHTML) / 100
    }
})


//On gère le clique sur un bouton nombre
function ChiffreClick() {
    let boutons = document.querySelectorAll(".chiffre")
    for (let index = 0; index < boutons.length; index++) {

        /*On associe le clique du clavier avec nos boutons en ecoutant l'evennement keydown 
        qui permet de savoir quel bouton du clavier a été cliqué */
        document.addEventListener("keydown", (e) => {
            //On test si le bouton du clavier correspond au bouton de notre page
            if (e.key === boutons[index].textContent) {

                //Si c'est bon, on remplace le background du bouton pour montrer que c'est lui qu'on a cliqué
                boutons[index].classList.replace("btn-light", "btn-secondary")

                //On clique sur ce bouton
                boutons[index].click()

            } else { // dans le cas contraire on ramene l'ancien background avec la methode classList qui permet de modifier une class
                boutons[index].classList.replace("btn-secondary", "btn-light")
            }
        })

        //On écoute les bouton au niveau du navigateur
        boutons[index].addEventListener("click", function () {
            if (resultat.innerHTML === "0") {
                resultat.innerHTML = this.textContent
            } else {
                resultat.innerHTML += this.textContent
            }
        })
    }
}


//On recupère l'operateur
function Operateur() {
    let boutons = document.querySelectorAll(".operateur")


    for (let index = 0; index < boutons.length; index++) {
        document.addEventListener("keydown", (e) => {
            if (e.key === boutons[index].textContent) {
                boutons[index].classList.replace("btn-light", "btn-secondary")
                boutons[index].click()
            } else {
                boutons[index].classList.replace("btn-secondary", "btn-light")
            }
        })
        boutons[index].addEventListener("click", function () {
            //On test si l'écran n'est pas vide pour pouvoir associer l'operateur
            if (resultat.innerHTML !== "") {
                operation.innerHTML = resultat.innerHTML + this.textContent
                resultat.innerHTML = 0
                operateurUtilise = this.textContent
            }
        })

    }

}


//Fonction egal
function egal() {
    let egal = document.querySelector(".egal")
    egal.addEventListener('click', function () {

        //On test si la dernière variable saisie n'est pas vide
        if (dernierValeurEntrer !== "") {
            //On effectue l'operation en tenant compte de la dernière variable saisie et de l'operateur
            operation.innerHTML = resultat.innerHTML + operateurUtilise + dernierValeurEntrer
            resultat.innerHTML = eval(operation.innerHTML)

        } else {

            //On effectue notre calcule normal en utilisant eval qui permet d'effectuer de convertir notre chaine de caractère en calcul mathématique
            dernierValeurEntrer = resultat.innerHTML
            operation.innerHTML += resultat.innerHTML
            resultat.innerHTML = eval(operation.innerHTML)
        }

    })
}

//On appel nos fonctions
ChiffreClick()
Operateur()
egal()
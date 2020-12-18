var texteAffiche = "";

function ajouterTexte() {

    var saisie = document.getElementById('saisie');

    var affichage= document.getElementById('affichage');

    texteAffiche = texteAffiche + saisie.value + "<br>";

    affichage.innerHTML = texteAffiche;

    saisie.value = "";
}
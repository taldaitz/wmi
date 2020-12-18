function afficherTest(entree) {

    var chiffre = 5;

    chiffre = chiffre++;
    //chiffre == 6

    var personne = {
        prenom : "Thomas",
        nom : "Aldaitz"
    };

    chiffre = chiffre + entree;

    //alert("Valeur chiffre : " + chiffre);
    alert("Bonjour " + personne.prenom + " " + personne.nom);
}


function changerCouleur(couleur) {
    var element = document.getElementById('resultat');

    var text = document.getElementById("text");

    element.innerHTML = text.value;

    element.style.backgroundColor = couleur;
}
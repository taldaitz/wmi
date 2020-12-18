function afficherMessage(bouton) {
    /*switch(bouton) {

        case 1 :
            alert("Il fait beau!");
            break;

        case 2 :
            alert("Il fait bof bof ...");
            break;

        case 3 :
            alert("Il pleut.");
            break;

    }*/

    var compteur = 0;
    while(compteur < bouton) {
        alert("Bonjour");
        compteur++;
    }

    for(var compteur = 0; compteur < bouton; compteur++){
        alert("Bonjour " + toto);
    }

}

function survol() {
    alert("Vous survolez l'image : " + total);
}

var total = 0;
var historique = '';

function cumul() {

    total++;

    if(total == 1) {
        alert(total);
        historique = total; 
    } else {
        historique = total + " - " + historique; 
        alert(historique);
    }
}
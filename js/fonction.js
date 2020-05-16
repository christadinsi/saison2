//Premiere fonction 

/*****************************************************************************/


/**
 * Création de la fonction  donnEmail del 'episode1
 */
function donnEmail(){
    let mail = prompt('Donne moi ton adresse mail :'); 
    
    let  arobase = /@/; // on creer  une expression regulière  ou regex  
    
    let recherche = arobase.test(mail);// on recherche le caratere @ avec notre methode test
    
    /* On verifie que la variable recherche contient vraiment l'arrobase 
       et que l'adresse mail est ecrit en miniscule si les deux condition sont vrai
       alors mail valide et l'adresse mail non valide */
    
    if(recherche  && mail == mail.toLowerCase()){
        alert('adresse mail valide: '+ mail);
    } else {
        alert("Erreur votre adresse mail n'est pas valide");
    }
    }
    donnEmail();//appelel de la fonction

/*****************************************************************************/

/**
 * creation de l fonction motDePasse de l episode2
 */

function motDePasse(){
    //debut du programme choissir un mot de passe 

let mdp = prompt('Choisis un mot de passe :');// declaration de la variable mdt et aaffectation  du mot de passe

/*on verifie que le mot de passe contient des chiffres et au moi une lettre en majuscule 
et au moin 8 caracyteres si toutes les condition son verifier alors email valide */
if( mdp.match ( /[0-9]/g) && mdp.match(/[A-Z]/g) && mdp.length >= 8 ){
    alert('mot de passe valide');
} else {
    alert('entrer un mot de passe à 8 caractères minimum');
}
//fin du programme
}
motDePasse();

/*****************************************************************************/

//fonction monEnfant de l'episode 3
function nomEnfant(){
    let nom = prompt('Entrez votre nom :');
let nbrEnfants = parseInt(prompt('Vous avez combien d\'enfant?'));


if(nbrEnfants == 0 || nbrEnfants == 1){
    alert( nom + ', vous avez ' + nbrEnfants + ' enfant');
} else {
    alert( nom + ', vous avez ' + nbrEnfants + ' enfants');
}
}
nomEnfant();

/*****************************************************************************/

//fonction dateDeNaissance de ll'episode 4
function dateDeNaissance() {
    let jour = parseInt(prompt('Entrez le jour de naissance :'));
let mois = parseInt(prompt('Entrez le mois de naissance :'));
let année = parseInt(prompt('Entrez l\'année de naissance :'));

alert('votre anée de naissance est :'+ jour + '/' + mois + '/' + année);

}
dateDeNaissance();

/*****************************************************************************/
/**
 * Fonction ficheDeRenseignement de l'episode 5
 */


 function ficheDeRenseignement(){
    let utilisateur = new Object();        //creation d'un objet utilisateur


 /* creation d'une clé nom appartenant à l'objet utilisateur 
    et on l'affecte une valeur qui sera entré par l'utilsateur*/
 
utilisateur.nom = prompt('entrer votre nom'); 

 /* creation d'une clé renom appartenant à l'objet utilisateur 
et on l'affecte une valeur qui sera entré par l'utilsateur*/

utilisateur.prenom= prompt('entrer votre prenom');

 /* creation d'une clé sexe appartenant à l'objet utilisateur 
et on l'affecte une valeur qui sera entré par l'utilsateur*/

utilisateur.sexe = prompt('Entrez votre sexe  M ou Mme');

 /* creation d'une clé titre appartenant à l'objet utilisateur 
et on l'affecte la clé sexe qui aura pour valeur ce que l'utisateur aura entré*/

utilisateur.titre = utilisateur.sexe;

// on affiche le résultat  das la console
console.log( utilisateur.titre + ' ' +  utilisateur.nom + ' ' + utilisateur.prenom );
// fin du programmeF
}
ficheDeRenseignement();

/*****************************************************************************/

/**
 * fonction affichageJour
 */
// debut du programme 

// fonctinJour
function affichageJour(){
    let jours = ['Dimanche' , 'Lundi','Mardi','Mercredi', 'jeudi' ,'vendredi' ,'samedi'] 
 
let numero = parseInt(prompt('Entrez le numéro du jour :'));// on demande à l'utilisateur d'entrer un numéro

console.log(jours[numero]);  // on affiche le jour  correspondant dans la console


//fin du programmme
}
affichageJour();

/*****************************************************************************/


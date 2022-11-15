let btn1 = document.querySelector('#myBtn1');
let btn2 = document.querySelector('#myBtn2');

const message1 = "Bravo, bel échauffement !";
const message2 = "Vous êtes passé maître en l'art du clic !";
let compteur = 0;
btn2.innerHTML = compteur;

btn1.addEventListener('click', onClickHandlerForBtn);

function onClickHandlerForBtn() {
    if(compteur >=5 && compteur <= 9){
        btn1.innerHTML = message1;
    } else {
        if(compteur > 9){
            btn1.innerHTML = message2;
        }
    }
    btn2.innerHTML = compteur;
    compteur++;

}

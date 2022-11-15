let btn = document.querySelector('#myBtn');
const message1 = "Bravo, bel échauffement !";
const message2 = "Vous êtes passé maître en l'art du clic !";
let compteur = 1;

btn.addEventListener('click', onClickHandlerForBtn);

function onClickHandlerForBtn() {
    if(compteur >=5 && compteur <= 9){
        btn.innerHTML = message1;
    } else {
        if(compteur > 9){
            btn.innerHTML = message2;
        }
    }
    compteur++;
}

console.log(timeAlert()); 

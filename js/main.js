//DICHIARO LE VARIABILI
const gridElement = document.querySelector(".container");
const btnPlay = document.querySelector(".play")


// AL CLICK DEL BOTTTONE PLAY MI AGGIUNGE UNA STRINGA VUOTA AL CONTAINER
btnPlay.addEventListener("click", function(){
    gridElement.innerHTML="";                   
    let option = document.querySelector("#option").value;        // IN BASE ALL'OPZIONE SCELTA MI VA A MODIDIFICARE IL "BOX" DELLA FUNZIONE
    play(option);
}); 



///////////////
// FUNZIONI////
///////////////

// FUNZIONE CHE HA IL COMPITO DI CREARE UN DIV CON LA CLASSE "SQUARE" E IN BASE AL BOX SCELTO IN PRECEDENZA AGGIUNGERE ANCHE UN ULTERIORE CLASSE PER 
// IL NUMERO DEI QUADRATI. UTILIZZO UN'ALTRA FUNZIONE ALL'INTERNO PER CLICCARE SUI QUADRATI E STAMPARE IN COSOLE LA CASELLA SCELTA
// E CABIARE IL COLORE A QUESTA
function play (box){
    
    for (let i = 1 ; i <= box; i++){
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.classList.add(`s-${box}`);
        newSquare.innerHTML=`${i}`;
        gridElement.appendChild(newSquare);

        newSquare.addEventListener("click", function() {
            console.log("La casella selezionata è la numero:", this.innerHTML);
            this.classList.toggle("clicked");
        });
    }  
        
}



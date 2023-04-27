//DICHIARO LE VARIABILI
const gridElement = document.querySelector(".container");
const btnPlay = document.querySelector(".play");
const option = document.querySelector("#option");
let numSquare = [];
let bomba = [];

// AL CLICK DEL BOTTTONE PLAY MI AGGIUNGE UNA STRINGA VUOTA AL CONTAINER
btnPlay.addEventListener("click", function(){
    gridElement.innerHTML="";        
    // IN BASE ALL'OPZIONE SCELTA MI VA A MODIDIFICARE IL "BOX" DELLA FUNZIONE           
    let optionEl = option.value; 
    gen(optionEl);     
    play(optionEl);
    
    
    console.log(bomba);
    console.log(numSquare);
    
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
        newSquare.innerHTML = `${i}`;
        gridElement.appendChild(newSquare);
        
        
        newSquare.addEventListener("click", function() {
            numSquare.push(this.innerHTML);
            
             
        });
        
    }         
}

// FUNZIONE CHE MI PERMETTE DI GENERARE 16 NUMERI CASUALI CHE VANNO DA [1-100], [1-81] E [1-49], in base all'opzione
function gen (num){

    for (let i = 1; i <= 16; i++){
        let numGen = Math.floor(Math.random() * num + 1);

        if (numGen == numGen){
            for (let i = 1; i <= 16; i++){
                numGen = Math.floor(Math.random() * num +1);
            }
        }
        bomba.push(numGen);

        
    }

}

// il numero generato casualmente deve coincidere con il numero presente in una cella

// la cella con il numero se schiacciata diventa rossa e la partita finisce
// in base alle celle senza bomba cliccate dare un punteggio finale


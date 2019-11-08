const word=["B","O","N","J","O","U","R"];
const emptyWord=["_","_","_","_","_","_","_"];
const alreadyUsed=[];

// VERIFIE QUE L UTILISATEUR ENTRE UNE SEULE LETTRE ET PAS DE CHIFFRE---------------------------------------------------------------------
function notaNumberandOnlyOneLetter(theLetter){

    const numbers=["0","1","2","3","4","5","6","7","8","9"];

    for(let i=0;i<numbers.length;i++){

        if(theLetter==numbers[i] || theLetter.length>1){
            return true;
        }

    }
    return false;
}

// DEMANDE UNE LETTRE ---------------------------------------------------------------------------------------------
function askLetter(){
    let aLetter=prompt("entre une lettre");
    if(notaNumberandOnlyOneLetter(aLetter)==true){
        while(notaNumberandOnlyOneLetter(aLetter)==true){
            aLetter=prompt("les chiffres ne sont pas autorisé et il ne peut y avoir qu'une seule lettre");
        }
    }
    aLetter=upperCase(aLetter);
    return aLetter

}

// CONVERTIT UN TABLEAU EN STRING --------------------------------------------------------------------------------
function stringify(array){
    array=array.join('');
    return array;
}

// TRANSFORME L INPUT EN MAJUSCULE--------------------------------------------------------------------------------
function upperCase(theLetter){
    theLetter=theLetter.toUpperCase();
    return theLetter;
}

// COMPARE LES LETTRES ENTREE AVEC LE TABLEAU EXISTANT ----------------------------------------------------------------

function guessLetter(theWord,theEmptyWord, used){

        let realWord=stringify(theWord);
        let findWord=stringify(theEmptyWord);
        let gameisFinished=false;
        letter="";

        while(gameisFinished==false){

            let thereisLetter=true;
            let used=false;
            letter=askLetter();

            if(alreadyUsed.includes(letter)==true){
                alert("vous avez deja utiliser cette lettre");
                used=true;
            }


            if(theWord.includes(letter)==false){
                alert("cette lettre n'est pas dans le mot");
                alreadyUsed.push(letter);
                thereisLetter=false;
            }

            if(thereisLetter==true && used==false ){
                theWord.forEach(function(item, index){

                        if(letter==item){
                            theEmptyWord[index]=item;
                            alert("vous avez trouver la lettre "+letter);
                            findWord=stringify(theEmptyWord);
                            alreadyUsed.push(letter);
                            document.getElementById("target").innerHTML=findWord;
                            console.log(findWord);
                        }

                    });
            }

            if(realWord==findWord){
                gameisFinished=true;
            }



        }

        alert("bravo vous avez trouver le mot "+findWord);

}


document.getElementById("target").innerHTML=stringify(emptyWord);
document.getElementById("play").addEventListener("click", ()=>{
    guessLetter(word,emptyWord, alreadyUsed);
});

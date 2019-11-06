const word=["B","O","N","J","O","U","R"];
const emptyWord=["","","","","","",""];
let letter="";

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

// VERIFIE QUE L UTILISATEUR ENTRE UNE LETTRE ---------------------------------------------------------------------
function notaNumber(theLetter){

    const numbers=["0","1","2","3","4","5","6","7","8","9"];

    for(let i=0;i<numbers.length;i++){

        if(theLetter==numbers[i]){
            return true;
        }

    }
    return false;
}


// COMPARE LES LETTRES ENTREE AVEC LE TABLEAU EXISTANT ----------------------------------------------------------------
function guessLetter(theWord, theLetter, theEmptyWord){

        let realWord=stringify(theWord);
        let findWord=stringify(theEmptyWord);;

        while(realWord!=findWord){

            for(let i=0; i<theWord.length;i++){

                    if(theLetter==theWord[i]){
                        theEmptyWord[i]=theLetter;
                        console.log(stringify(theEmptyWord));
                        findWord=stringify(theEmptyWord);
                    }

            }
            theLetter=prompt("entre une autre lettre");
            if(notaNumber(theLetter)==true){
                while(notaNumber(theLetter)==true){
                    theLetter=prompt("les chiffres ne sont pas autorisé");
                }
            }
            theLetter=upperCase(theLetter);
        }

        alert("bravo vous avez trouver le mot "+findWord);

}


letter=prompt("entre une lettre");
if(notaNumber(letter)==true){
    while(notaNumber(letter)==true){
        letter=prompt("les chiffres ne sont pas autorisé");
    }
}
letter=upperCase(letter);
guessLetter(word, letter, emptyWord);

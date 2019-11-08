// ENTRE LE MOT A TROUVER----------------------------------------------------------------------------------------------------------------------
function giveWord (){
    let wordToFind=prompt("Entre le mot a deviner");
    if(notaNumberAndNotASpecial(wordToFind)==true){
        while(notaNumberAndNotASpecial(wordToFind)==true){
            wordToFind=prompt("Les chiffres et les caractéres spéciaux ne sont pas autorisé !");
        }
    }
    wordToFind=upperCase(wordToFind);
    const wordToFindIntoArray=wordToFind.split(""); // transforme le mot en tableau ou chaque lettre est separée
    return wordToFindIntoArray;
}

// CREE UN TABLEAU VIDE DU MOT A TROUVER------------------------------------------------------------------------------------------------------
function createEmptyWord (lengthToCopy){
    const emptyArray=[];
    lengthToCopy.forEach((item,index)=>{  // remplit un tableau vide de la même taille que le mot à trouver
        emptyArray[index]="_";
    });
    return emptyArray; // renvoi le tableau vide
}

// VERIFIE QUE L UTILISATEUR N'ENTRE PAS DE CHIFFRES NI D'ESPACE NI DE CARACTERE SPECIAUX---------------------------------------------------------------------
function notaNumberAndNotASpecial(theBannedWord){

    for(let i=0;i<theBannedWord.length;i++){
        if(!/[a-z]+/i.test(theBannedWord[i])){ // renvoie true si un caractére du tableau n'est pas une lette
            return true;
        }
    }
    return false;
}

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
    let aLetter=prompt("Entre une lettre");
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

// TRANSFORME L'INPUT EN MAJUSCULE--------------------------------------------------------------------------------
function upperCase(theLetter){
    theLetter=theLetter.toUpperCase();
    return theLetter;
}

// COMPARE LES LETTRES ENTREE AVEC LE TABLEAU EXISTANT ----------------------------------------------------------------

function guessLetter(theWord,theEmptyWord){
        let fail=0;
        const alreadyUsed=[]; // tableau vide
        let realWord=stringify(theWord);
        let findWord=stringify(theEmptyWord);
        let gameisFinished=false;
        letter="";

        while(gameisFinished==false){

            let thereisLetter=true;
            let used=false;
            letter=askLetter();

            if(alreadyUsed.includes(letter)==true){
                alert("Vous avez déjà utiliser cette lettre");
                used=true;
            }

            if(theWord.includes(letter)==false){
                alert("Cette lettre n'est pas dans le mot");
                alreadyUsed.push(letter);
                thereisLetter=false;
                fail++;
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
        alert("Bravo vous avez trouver le mot "+findWord+" et vous avez fait "+fail+" erreur"+"(s)");
}
// LANCE LE JEU-----------------------------------------------------------------------------------
alert("Entrer d'abord un mot a deviner par une tierce personne et ensuite appuyer sur Let's Play pour commencer a deviner le mot");
const word=giveWord();
const emptyWord=createEmptyWord(word);
document.getElementById("target").innerHTML=stringify(emptyWord);
document.getElementById("play").addEventListener("click", ()=>{
    guessLetter(word,emptyWord);
});

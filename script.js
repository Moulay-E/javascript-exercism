
const exo1 = document.querySelector(".exo");
let words = "hello world of beautifull things";
let theFast;
//fonction qui decoupe retourne et assemble 
function reversed(word){
     theFast = word.split("").reverse().join("");
    console.log(theFast + 'hi');
   return theFast;
   

};
const result = reversed(words);
exo1.innerHTML= ` le mots non reversed : ${words} <br/> reverse:  ${theFast}`;

const palindrome = document.createElement("p");
palindrome.innerHTML = words == theFast ? 
    "<br/>ce mots est un palindrome ": 
    "ce mots n'est pas un palindrome";
exo1.appendChild(palindrome);


//----------exo de comparateur de longueur tableau--
let longuestWordSplited;
function longuestWord(word){
   let splited = word.split(" ");
    for (let i = 0; i < splited.length; i++){  
        if(!longuestWordSplited || longuestWordSplited.split("").length < splited[i].split("").length){
            longuestWordSplited = splited[i];
        }
    }
    console.log(longuestWordSplited);
   return longuestWordSplited;
};

//------autre method pour arriver a la meme chose : 
// function longuestWord(word){
//    let splited = word.split(" ");
//    let arr = [];
//     for (let i = 0; i < splited.length; i++){  
//        arr.push(splited[i].length);
//     }
//     let resultat = Math.max(arr);
//     console.log(resultat);
//    return resultat;
// };

let resultLonguest = longuestWord(words);
// console.log(words.split(" "));
const longuestWordHtml = document.createElement("p");
longuestWordHtml.innerHTML = `comparaison mots le plus long de ce texte:
     ${words} <br/> et sont mots le plus long est : ${resultLonguest}`; 
exo1.appendChild(longuestWordHtml);

// --------- genere un nbr aléatoir -----------
let random;
function randomNumber(max){
 return random = Math.round(Math.random() * max);
}
randomNumber(100);
console.log(random);

const btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
    btn.innerHTML = "Generer un nombre aléatoire: <br />"
         + randomNumber(100);
});

// l'utilise pour selectionner dde maniere aleatoire un index tableau
 const fruit =  ["bannae", "oranfe", "pomme"];
function randomFruit(){
    let fruitRandom = Math.round(Math.random() * fruit.length -1);
    console.log(fruit[fruitRandom]);
};
randomFruit();


let upp = "every word in caps";
let uppCaps = upp.split(" ");
console.log(uppCaps);
 let uppCapsWord = "";
for(let i = 0; i < uppCaps.length; i++){
    uppCapsWord +=" "+  uppCaps[i].charAt(0).toUpperCase() 
    + uppCaps[i].slice(1);
    console.log(uppCapsWord +'test');
}
console.log(uppCapsWord);
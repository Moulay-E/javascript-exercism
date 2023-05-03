
const exo1 = document.querySelector(".exo");
let reverse = "hello world";
let reverseFast = "that fast boy";
function splits(word, fast){
    //decoupe chaque elemetn un un index dans un tableau
    let tab = word.split("");
    console.log(tab);
    //return element reversed from array in string
    tab = tab.reverse();
    console.log(tab + " ah");
    // glue element (string) each other
    tab = tab.join("");
    console.log(tab + " ho");
    //all in one
    let theFast = fast.split("").reverse().join("");
    console.log(theFast + 'hi');
   return {tab: tab, theFast: theFast};
   

};
const result = splits(reverse, reverseFast);
exo1.innerHTML= `reverse ${result.tab} ${result.theFast}`;

import React from "react";


function splits({word, fast}){
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
    return(
        <p>
            Function reverse:<br/> {tab} <br/> {theFast}
        </p>
    )

};


export default splits;
const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";
const text5 = "to the movie theater";
/* === SYNTAX ===  === string.concat(string1, string2, ..., stringX) === */

const textOutput1 = text1.replace("codingschool", "school").concat(" ", text4, " to the movie theater");
const textOutput2 = text1.slice(0, 12).concat(" ", text5);
const textOutput3 = text2.concat(" ", text4, " ", text1.slice(0, 28).replace("is", "are").replace("codingschool", "school"));
const textOutput4 = text2.concat(" ", text4, " ", text1.slice(0, 28).replace("is", "are").replace("codingschool", "gym"), " ", text4, " ", text5);
const textOutput5 = text2.concat(" ", text1.slice(4, 28).replace("codingschool", "school"), " ", text4, " ", text5);


console.log(textOutput1);
console.log(textOutput2);
console.log(textOutput3);
console.log(textOutput4);
console.log(textOutput5);


const textAddedToHtml = document.getElementById('changesInHtml');

textAddedToHtml.innerHTML = `<h3>Added with '.innerHTML':</h3> <p>${textOutput1}</p> <p>${textOutput2}</p> <p>${textOutput3}</p> <p>${textOutput4}</p> <p>${textOutput5}</p>`;

// oder so ('document' bezieht sich auf DOM):
document.write(`<h3>Added with 'document.write':</h3> <p>${textOutput1}</p> <p>${textOutput2}</p> <p>${textOutput3}</p> <p>${textOutput4}</p> <p>${textOutput5}</p>`)


/* Verwende die Methode concat(), um die gewünschten Zeichenketten zu erhalten.

const text1 = “Sam is going to codingschool”;
const text2 = “Susi”
const text3 = “programming bike”
const text4 = “and” 

Erzeuge mit "concat" diese Ausgabe in einem HTML-Dokument. Nutze alle Methoden, die du bereits gelernt hast.

Sam is going to school and to the movie theater
Sam is going to movie theater
Susi and Sam are going to school
Susi and Sam are going to gym and to the movie theater
Susi is going to school and to the movie theater

Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis anzuzeigen.

 */
//1

function somme(x, y) {
    return x + y;
}
console.log(somme(45, 27));

//2

const myArray = [123, 213, 231, 132, 312, 321];
console.log(Math.max(...myArray));

//3


//4

const Carac = ['Avion', 'Téléphone', 'Bouche', 'Chaise'];
Carac.sort();
console.log(Carac);

//5

//6

//7

//8

C = "Test d'une phrase avec des voyelles";

CR = C.replaceAll("a", "A");
CR = CR.replaceAll("a", "A");
CR = CR.replaceAll("e", "E");
CR = CR.replaceAll("u", "U");
CR = CR.replaceAll("i", "I");
CR = CR.replaceAll("o", "O");
CR = CR.replaceAll("y", "Y");

console.log(CR);

//9

function Compteur(str) {
    var vowelsCount = 0;
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u" || string.charAt(i) == "y") {
            vowelsCount += 1;
        }
        if (string.charAt(i) == "A" || string.charAt(i) == "E" || string.charAt(i) == "I" || string.charAt(i) == "O" || string.charAt(i) == "U" || string.charAt(i) == "Y") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}

console.log(Compteur("Abracadabra !"));

//10




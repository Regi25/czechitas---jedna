/*Napište funkci, která vypíše součet, rozdíl, násobek a podíl 2
zadaných čísel, rozdíl zobrazujte jako absolutní hodnotu.

Napište funkci, který vypíše informaci, zda zadané číslo je
nebo není prvočíslo.

- prvočíslo - dělitelné pouze 1 a samo sebou
- zbytek po dělení: % - modulo
- v první moment pčedpokládejme, ze číslo JE prvočíslo a
budeme případně rozporovat toto tvrzeni.

function pocitani(x, y) {
  let soucet = x + y;
  let rozdil = Math.abs(x - y);
  let nasobek = x * y;
  let podil = Math.floor(x / y);

  console.log(soucet, rozdil, nasobek, podil);
}

let x = Number(prompt('Zadejte číslo 1: '));
let y = Number(prompt('Zadejte číslo 2: '));
pocitani(x, y);*/
function jePrvocislo(cislo) {
  let jePrvocislo = true;

  for (let i = 2; i < cislo; i++) {
     if (cislo % i == 0) {
        jePrvocislo = false;
        break;
     }
  }
  return jePrvocislo;
 }
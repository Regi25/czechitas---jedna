/*Nechte uživatele zadat 2 čísla, které značí dolní a horní mez
na číselné ose celých čísel – včetně.
Pokud tedy zadá 3 a 7, uvažujme čísla 3, 4, 5, 6, 7.
Vypište pomocí FOR
Nechte uživatele zadat horní mez – číslo. Vypište všechny
čísla od nuly do této horní meze VČETNĚ, které jsou sudá.*/
let dolni = Number(prompt("dolni mez"));
let horni = Number(prompt("horni mez"));


for (let i = 0; i <= horni; i++) {
  if (i % 2 ==0) {
  console.log(i);
  }
} 
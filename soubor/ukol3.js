let a = Number(prompt("Zadejte prvni cislo:"));
let b = Number(prompt("Zadejte druhe cislo:"));
let c = Number(prompt("Zadejte treti cislo:"));
if(a > b) {
  console.log("Nejvetsi cislo je a" + a);
} else {
  if(b > c) {
    console.log("Nejvetsi cislo je b" + b);
  } else {
    console.log("Nejvetsi cislo je c" + c);
  }
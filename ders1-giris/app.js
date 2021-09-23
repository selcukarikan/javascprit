// console

//console.log("Hallo Javascript");
//alert("achtung !!!");
//prompt("wie heisst du");

// variable defination  "var"

// ? mavi renk yapiyor
// ? Ancak, modern JS var keyword’unun kullanımı azaldı.
//? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etMEMEKtedir.

var nachname = "arikan";
console.log(typeof nachname);
nachname = 3.14;
console.log(typeof nachname);

// ---const---

// TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword’leridir.
// CONST: Sadece başlangıçta değer atanabilir.
//  Sonradan değeri değiştirilemez (non-primitive’ler hariç).mümkünse const,
// yoksa let, o da mümkün değilse var kullanılmalı. çünkü js de çok rahat değişiklik yapılıyor, var, let sıkıntı çıkarabilir.

const piSayisi = 3.14;

// piSayisi=2 olamaz, ilk bas da ne yazildiysa o olmalidir

const vorname = "Selcuk";
console.log(typeof vorname);

// -----let------

let preis;
preis = 10;
console.log(typeof preis);
preis = "kostenlos";
console.log(preis);

//String kannst 3 verschiedene defination.
let name1 = "belma";
let name2 = "ali";
let name3 = "ahmet";

// aritmetik operatorler

const kola = 5;
const cips = 6;
const brot = 2;
console.log(kola + cips + brot);
console.log("gesamt", kola + cips + brot);

const ad="selcuk";
console soyad="arikan"
console.log(ad+soyad);

const s1 = 7;
const s2 = "7";
console.log(s1 + s2); //77 yazdirir


console.log("benim adim"+" " +ad+" "+"benim yasim"+" "+"s1");

//! -----Template literal-----

console.log(`benim adım ${ad} benim yasım ${s1}`);


const taban=2;
const us=3;
console.log(taban**us);

// mod alma %
const sayi=123;
const yuzler=
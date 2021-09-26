// Functions

//1. Yontem : Function Declaration
//DECLARATİON yöntemi ile fonksiyonun tanımlanması
//çağırılmasından önce veya sonra olabilir

// function yazdirAd() {
//  console.log("Selcuk");
//}
//yazdirAd();

// Ornek 1: Klavyeden girilen sayinin tek mi cift mi oldugunu gosteren bir kod yazimi
//const sayiniz = prompt("lutfen bir sayi giriniz");

//console.log(tekCift(sayiniz));
//function tekCift(sayiniz) {
//return sayiniz % 2 == 0 ? `${sayiniz} çifttir` : `${sayiniz} tektir`;
//}
//! 2. YÖNTEM : FUNCTİON EXPRESSION (bu yöntem daha yaygın)
// Ornek 2: Klavyeden girilen sayinin tek mi cift mi oldugunu gosteren bir kod yazimi

//const tekCift1 = function (sayi) {
//console.log("girilen sayi :" + sayi);
//return sayi % 2 == 0 ? "CIFT" : "TEK";
//};
//console.log(tekCift1(5));

//Ornek 3: Verilen 3 sayidan en buyuk sayiyi bulma :

let großZahlFinden = function (a, b, c) {
  let großZahl;
  if (a > b && a > c) {
    großZahl = a;
  } else if (b > c && b > a) {
    großZahl = b;
  } else {
    großZahl = c;
  }
  return großZahl;
};
console.log(großZahlFinden(5, 8, 3));

//! 3. YÖNTEM : FUNCTİON ARROW (ok)
//const ciftMi = (sayi) => (sayi % 2 == 0 ? "cift" : "tek");
//console.log(ciftMi(5));

const ciftMi = (num) => (num % 2 == 0 ? `${num} = Cift` : `${num} = Tek`);
console.log(ciftMi(7));

//ornek 4:
const taban = prompt("taban gir");
const us = prompt("us giriniz");

const ustAl = (taban, us) => taban ** us;
console.log(ustAl(taban, us));

//javascripde 3 cesit degisken tanimlama vardir.
//var - (yeni surumlerde cikan degiskenler :let  - const)

//degiskenin ilk karakteri harf yada alt cizgi olmalidir
//bosluk , sembol ve özel isaretler iceremez

//js kucuk buyuk harf duyarlidir

// ?var : tekrardan atama yapmak mumkundur
// ? Ancak, modern JS var keyword'unun kullanımı azaldı.
//? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etMEMEKtedir.

alert("Achtung !!!");
var vname = "selcuk";
console.log(typeof vname);
const nname = "arikan";
console.log(typeof nname);

// let : istenildigi zaman degeri degistirelebilir. baska yerlerden erisilmez, tanimlandigi block icerisinde gecerlidir

let preis;
preis = 5;
console.log(typeof preis);
preis = "arikan";
console.log(preis);

let name1 = "belma";
let name2 = "ahmet sait";
let name3 = "ali osman";
console.log(name2);

//const : 1-sadece baslangic atamasi ile deger atanabilen sonrasinda
// degeri degistirilemeyen degisken tanimlamasidir.sonradan atama yapilmaz
//2- sadece tanimlandigi block icerisinde gecerlidir(Block-Scoped)
// TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler hariç).mümkünse const,
//Todo yoksa let, o da mümkün değilse var kullanılmalı. çünkü js de çok rahat değişiklik yapılıyor, var, let sıkıntı çıkarabilir.

const piSayisi = 3.14;
console.log(piSayisi);
const datum = "24.09.2021";
console.log(datum);

const brot = 5;
const kartoffeln = 2;
const tomatoen = 3;
console.log("toplam fiyat :" + (brot + kartoffeln + tomatoen));

const zahl1 = 23;
const zahl2 = 6;
console.log(zahl1 + zahl2);
console.log(zahl1 + "" + zahl2);

// mod alma %

const zahl3 = 151;
const mod4 = zahl3 % 4;
console.log(mod4);

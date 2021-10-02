// Nesneler

//diziler sirali bellek bölgeleridir. dolayisiyla dizilere erisim index ile olur. eger diziler karisik ise (nesne)
//indexle olur. Eger diziler karisiksa (nesne) indexle erisim guclugu ortaya cikar bu yuzden =>

//! Object (nesne)

const insan = {
  ad: "selcuk",
  soyad: "arikan",
  yas: 36,
  meslek: "QA Test Automation Enginner",
  diller: ["java", "js", "sql", "html"]
};
console.log(insan);

//1- .dot notasyonu
console.log(insan.ad);
console.log(insan.diller);

//2-koseli parantez icinde gosterimi
console.log(insan["soyad"]);
console.log(insan["diller"]);

console.log(`Adim:${insan.ad} ve soyadim:${insan.soyad}`);

// const bilgi = prompt(
// "insan nesnesinden hangisini gormek istersin -ad,soyad,yas..-"
// );
// console.log(insan[bilgi]);

//objeye.key.value lar ekleme

insan.konum = "Turkiye";
insan.email = "selcukarikan1301@gmail.com";
insan["dogumTarihi"] = 1986;

console.log(insan);

const kisi = {
  ad: "belma",
  soyad: "arikan",
  dogumTarihi: 2016,
  meslek: "prenses",
  tool: "sempatiklik",
  ehliyet: false,
  yasHesapla: function () {
    return new Date().getFullYear() - this.dogumTarihi;
  },
  ozet: function () {
    return ` ${this.ad} ${this.soyad} ${this.yasHesapla()} yasındadır`;
  }
};
console.log(kisi);

console.log(kisi.yasHesapla());

console.log(kisi.ozet());

// nesne (object)iterasyon ornekleri
const people = [
  {
    ad: "ali",
    soyad: "arkan",
    meslek: "ogrenci",
    yas: 8
  },
  {
    ad: "ahmet",
    soyad: "arkan",
    meslek: "sekercocuk",
    yas: 1
  },
  {
    ad: "belma",
    soyad: "arkan",
    meslek: "prenses",
    yas: 5
  },
  {
    ad: "leyla",
    soyad: "arkan",
    meslek: "evhanimi",
    yas: 33
  }
];

console.log(people);

// ornek 1: people dizisindeki kisilerin mesleklerini konsolda yazdiralim

people.forEach((x) => console.log(x.meslek));

//ornek 2: people dizisindeki tum kisilerin yaslarini 1 artirarak yazdiriniz

people.map((x) => x.yas + 1).forEach((x) => console.log(x));

// ornek 3: yasi 25 e esit veya kucuk olanlarin adlarini yazdir

people.filter((x) => x.yas <= 25).forEach((x) => console.log(x.ad));

//ornek 4: people dizisindeki kisilerin isimlerini buyuk har olarak alan ve yaslarini 5 artirin ve soyadinin da ilk iki harfini yazdir

people
  .map((x) => {
    return {
      ad: x.ad.toUpperCase(),
      yas: x.yas + 5,
      soyad: x.soyad.slice(0, 2)
    };
  })
  .forEach((x) => console.log(x));

//ornek 5: meslegi prenses olanlarin isimlerini buyuk harf yapip ve yaslarini yazdiriniz

people;
const yeni = people
  .filter((x) => x.meslek == "prenses")
  .map((x) => {
    return {
      ad: x.ad.toLocaleUpperCase(),
      yas: x.yas
    };
  });
console.log(yeni);

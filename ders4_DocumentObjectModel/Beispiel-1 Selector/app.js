// todo getElementById

const paragraf = document.getElementById("password").style;
paragraf.backgroundColor = "black";
paragraf.color = "yellow";
paragraf.height = "55px";
paragraf.fontSize = "23px";

const button = document.getElementById("btn");
button.style.witdh = "77px";
button.style.color = "red";
button.style.fontSize = "23px";
button.style.background = "green";
button.textContent = "suchen"; // text deki submit yerine suchen yazilmasini saglar

// todo getElementByTagName  --bu kullanim tercih edilmiyor
const resim = document.getElementsByTagName("img");
resim[1].style.width = "400px";
resim[1].style.height = "400px";
resim[1].style.border = "11px solid red";
resim[0].style.width = "400px";
resim[0].style.height = "400px";
resim[0].style.border = "11px solid green";

// todo getElementByClassName

// const baslik = document.getElementsByClassName("h1");
// baslik[0].style.textAlign = "center";

// todo QuerySelector
//en cok kullanilan cagirma yolu
document.querySelector(".arama").textContent =
  "Document Object Model SELECTOR 😜 ";

document.querySelector("#govde").style.backgroundImage =
  "linear-gradient(green,blue,pink,white,yellow,pink)";

// todo Event
// onmouseover, onmouseout fare üstüne geldiginde yada ayrildiginda yapilacaklar

const h = document.querySelector(".h1");
h.onmouseover = function () {
  h.style.color = "red";
  h.style.backgroundColor = "black";
};
h.onmouseout = function () {
  h.style.color = "yellow";
  h.style.backgroundImage = "red";
};
//1. resme tikladigimizda 2. resimle yer degistirsin

document.querySelector(".bir").onclick = function () {
  document.querySelector(".bir").src =
    "./img/deep-cloning-objects-javascript.png";
  document.querySelector(".iki").src =
    "./img/116755408-combination-letter-js-j-s-gold-golden-alphabet-logo-icon-design-with-metal-look-on-black-background-.jpeg";
};

var showListe=[];
//todo son dosyasindan veri getirme asamalari
fetch("./tv-shows.json").then((cevap)=>cevap.json()).then(veri)=>{
    
    showListe=veri;

showIzle(showListe);

});

function showIzle(showListe) {
     
    var liste=document.querySelector(".liste");
    showListe.forEach((a)=>{

   
     liste.innerHTML=liste.innerHTML+`a daki ilk kat verileri a daki 2.kat verileri`  
    });
}
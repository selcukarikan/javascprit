//*****DİZİLERDE İTERASYON****** */

//****FOR DÖNGÜSÜ******

const koordinatlar = [120, 100, -100, 220, 330, -50];

let pozitif = 0;
let negatif = 0;

for (let i = 0; i < koordinatlar.length; i++) {
  koordinatlar[i] < 0
    ? (negatif = negatif + koordinatlar[i])
    : (pozitif = pozitif + koordinatlar[i]);
}
console.log(`negatifler toplamı: ${negatif} pozifler toplamı: ${pozitif}`);

//todo FOR IN DONGUSU

const hayvanlar=["aslan","fil","kartal","kanarya","civciv","kartal"];
const ara=prompt("sayisini merak ettigin hayvanin adini yaziniz");
const bulDondur=function(ara){

let hayvanSayisi=0;
for(let i in hayvanlar)
{
    if(hayvanlar[i]==ara)
    {hayvanSayisi++;}

}
hayvanSayisi==0?alert("aradigin hayvan bulunamadi"):
alert(àradiginiz${ara}hayvanindan ${hayvanSayisi} tane bulunmaktadir`);
}
bulDondur(ara);
/*
    Adı: Faktöriyel alma programı
    Yazan: Emre Harman
    Tarih: 16.09.2021
*/

//object örneği olsun diye yapıyoruz

//öncelikle boş bir obje oluşturuyoruz
let person = {}
//kullanıcının bilgilerini alıyoruz
person.name = prompt("Lütfen adınızı girin");
person.surname = prompt("Lütfen soyadınızı girin");
//kullanıcıya faktöriyel alma yeteneği kazandırıyoruz.
person.faktoriyelAl = function (sayi) {
    //başlangıç değeri olarak 1 atıyoruz.
    let faktoriyel = 1;
    //girilen sayı 0 ise faktöriyelini 1 olarak döndürüyoruz
    if (sayi === 0) {
        return faktoriyel;
    }
    //girilen sayı 0'dan büyükse faktöriyeli hesaplıyoruz
    for (let i = sayi; i > 0; i--){
        faktoriyel *= i
    }
    return faktoriyel
}

//kullanıcıdan sayı alıyoruz
let sayi=Number(prompt(`Merhaba ${person.name.toUpperCase()} ${person.surname.toUpperCase()}. Faktöriyeli alınacak sayıyı girin`));

//kulanıcı sayı girene kadar tekrar ediyoruz.
while (isNaN(sayi)) {
    sayi = Number(prompt("Lütfen sayı girin!"))
}

//sayının pozitif olup olmadığını kontrol ediyoruz.
if (sayi < 0) {
    alert("Negatif sayıların faktoriyeli alınamaz.")
} else {

    //kullanıcı sayı girdikten sonra fonksiyonu çağırarak faktöriyeli hesaplıyoruz
    const sonuc = person.faktoriyelAl(sayi);
    //hesapladığımız değeri alert ediyoruz
    alert(`${sayi} sayısının faktoriyeli=${sonuc}`);
}


//dersteki örnek

let sayi1 = Number(prompt("Lütfen bir sayı girin"))


alert("Girdiğiniz sayının faktoriyeli = " + faktoriyelAl(sayi1))


function faktoriyelAl(sayi) {
    let sonuc = 1
    for (let sayac = sayi; sayac > 0; sayac--){
        sonuc=sonuc * sayac
    }
    return sonuc
}








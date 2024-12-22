function kisiBul(dizi, isim) {
    const sonuc = dizi.find(kisi => kisi.isim.toLowerCase() === isim.toLowerCase());
    return sonuc;
}
const kisiler = [
    { isim: "Ilgın", 
        yas: 17 
      },
      { isim: "Yiğit",
        yas: 20
      },
      { isim: "Doruk",
         yas: 23 
      },
      { isim: "Eslem", 
        yas: 15 
      },
      { isim: "Eymen",
        yas: 22
      }
  ];
const arananIsim = prompt("Aramak istediğiniz kişinin adını girin:");

const arananKisi = kisiBul(kisiler, arananIsim);

if (arananKisi) {
    console.log("Bulunan kişi:", arananKisi);
    alert(`Bulunan kişi: ${arananKisi.isim}, Yaş: ${arananKisi.yas}`);
} else {
    console.log("Kişi bulunamadı.");
    alert("Kişi bulunamadı.");
}

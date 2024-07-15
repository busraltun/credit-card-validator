// Kredi kartı numarasının geçerliliğini kontrol eden fonksiyon
function isValidCreditCardNumber(checkCardNumber) {

    // checkCardNumber parametresinin var olup olmadığını kontrol edelim, burada throw fırlatmak mantıklı mı emin degilim direkt return false da diyebilirdim
    if (!checkCardNumber) {
        throw new Error('Geçersiz kredi kartı numarası: Parametre boş olamaz.');
    }

    //Kredi karti uzunlugu kontrol edilebilir ... Ama degiskenlik gosterebildigi icin burada kontrol eklemedim.
    
// Adım 1: Gelen numarayı string'e çevirin ve boşlukları temizleyelim.
//Böylelikle kullanıcılar kredi kartı numarasını girdiklerinde boşluk ihtimalini önler ve sadece rakam karakterlerini içeren bir string elde edilir.
let cardNumber = checkCardNumber.toString().replace(/\s+/g, '');
let sum = 0;
let shouldDouble = false; 

// Numara sondan başa doğru  (Luhn Algoritması için gerekli adım)
for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10);

    // Adım 2: Çift sıradaki basamakları ikiyle çarpın ve 9'dan büyükse 9 çıkarın
    if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
    }

    // Toplamı güncelle
    sum += digit;
    // Sıradaki basamağı ikiyle çarpmak için shouldDouble'ı tersine çevirin
    shouldDouble = !shouldDouble;
}

// Son adım: Toplamın 10'a bölümü 0 ise numara geçerlidir
return sum % 10 === 0;
}

// Fonksiyonu dışarıya aktarın, böylece diğer dosyalardan erişebilirsiniz
module.exports = isValidCreditCardNumber;


/*
Bu kod, isValidCreditCardNumber adlı bir fonksiyon içerir. 
Bu fonksiyon, gelen bir kredi kartı numarasını alır, Luhn Algoritması kullanarak numaranın geçerliliğini kontrol eder ve
sonucu true veya false olarak döndürür.

Bu dosyayı projenizin içine index.js adıyla kaydederek kullanabilirsiniz. 
Herhangi bir test veya kullanım durumunda bu fonksiyonu çağırabilir ve sonucunu kullanabilirsiniz.
*/
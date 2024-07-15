// Kredi kartı doğrulama fonksiyonunu içe aktarıyoruz.
const isValidCreditCardNumber = require('./creditCardValidator');

// Kullanıcıdan giriş almak için readline modülünü kullanıyoruz.
const readline = require('readline');

// Konsolda kullanıcıdan giriş almak için bir arayüz oluşturuyoruz.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Kullanıcıdan kart numarasını girmesini istiyoruz.
rl.question('Lütfen kontrol etmek istediğiniz kredi kartı numarasını girin: ', (answer) => {
    try {
        // Kart numarasının geçerli olup olmadığını kontrol ediyoruz.
        const isValid = isValidCreditCardNumber(answer);
        if (isValid) {
            console.log('Girdiğiniz kredi kartı numarası geçerlidir.');
        } else {
            console.log('Girdiğiniz kredi kartı numarası geçersizdir.');
        }
    } catch (error) {
        // Eğer bir hata oluşursa (örneğin boş giriş), hatayı gösteriyoruz.
        console.error(error.message);
    } finally {
        // Giriş arayüzünü kapatıyoruz.
        rl.close();
    }
});

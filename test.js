// Gömülü Node.js modülü olan 'assert'ı dahil ediyoruz. Bu modül, testlerimizin doğru olup olmadığını kontrol etmek için kullanılır.
const assert = require('assert');

// Kendi yazdığımız kredi kartı doğrulama fonksiyonunu içe aktarıyoruz.
const isValidCreditCardNumber = require('./creditCardValidator');

// Geçerli bir kredi kartı numarasını test ediyoruz.
// '4539 1488 0343 6467' geçerli bir kredi kartı numarasıdır ve fonksiyonumuz true döndürmelidir.
assert.strictEqual(isValidCreditCardNumber('4539 1488 0343 6467'), true, 'Geçerli bir kredi kartı numarası geçersiz olarak değerlendirildi');

// Geçersiz bir kredi kartı numarasını test ediyoruz.
// '1234 5678 9012 3456' geçersiz bir kredi kartı numarasıdır ve fonksiyonumuz false döndürmelidir.
assert.strictEqual(isValidCreditCardNumber('1234 5678 9012 3456'), false, 'Geçersiz bir kredi kartı numarası geçerli olarak değerlendirildi');

// Parametre boş olduğunda hata fırlatmasını test ediyoruz.
// Eğer fonksiyona boş bir string verirsek, bir hata fırlatmalıdır.
try {
    isValidCreditCardNumber('');
} catch (error) {
    // Hata fırlatıldığında, hata mesajının beklediğimiz gibi olup olmadığını kontrol ediyoruz.
    assert.strictEqual(error.message, 'Geçersiz kred i kartı numarası: Parametre boş olamaz.', 'Boş parametre hatası fırlatılmadı');
}

// Eğer tüm testler başarıyla geçerse, bu mesajı konsola yazdırıyoruz.
console.log('Tüm testler başarıyla geçti.');

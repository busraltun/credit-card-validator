# CreditCardValidator

CreditCardValidator, kredi kartı numaralarını doğrulamak için basit bir araç sağlayan bir NPM paketidir. Herhangi bir JavaScript projesine, özellikle React Native (Expo kullanılmadan) projelerine kolayca entegre edilebilir.

# creditCardValidator.js
Bu kod, isValidCreditCardNumber adli bir fonksiyon icerir. 
Bu fonksiyon, gelen bir kredi karti numarasini alir, Luhn Algoritmasi kullanarak numaranin gecerliligini kontrol eder ve
sonucu true veya false olarak dondurur.

Bu dosyayi projenizin icine index.js adiyla kaydederek kullanabilirsiniz. 
Herhangi bir test veya kullanim durumunda bu fonksiyonu cagirabilir ve sonucunu kullanabilirsiniz.

# App.js 
credit-card-validator kütüphanesini çağırıp kullandığımız uygulama

## Özellikler

- Luhn algoritmasını kullanarak kredi kartı numaralarını doğrular.
- React Native kullanılmıştır.
- Javascript
- Node
- npm
- Android Studio
- Jest

## Kurulum

Paketi NPM ile kurabilirsiniz:

```bash
npm install credit-card-validator
````
## Kullanım

 credit-card-validator'ı bir React Native projesinde nasıl kullanabileceğimize dair bir örnek:

### Paketin içe aktarılması

```javascript
import { validateCreditCardNumber } from 'credit-card-validator';
````
### Doğrulama fonksiyonunun kullanımı

```javascript
const cardNumber = '4111111111111111';
const isValid = validateCreditCardNumber(cardNumber);

if (isValid) {
  console.log('Kredi kartı numarası geçerli.');
} else {
  console.log('Kredi kartı numarası geçersiz.');
}
````
##  

### `validateCreditCardNumber(cardNumber)`

- **cardNumber**: `string` - Doğrulanacak kredi kartı numarası.
- **Döner**: `boolean` - Kredi kartı numarası geçerli ise `true`, aksi takdirde `false` döner.

## Örnek Proje

  CreditCardValidator'ı bir React Native projesine entegre etmenin bir örneği.

### Gereksinimler

 - React Native CLI'nın kurulu ve yapılandırılmış olmalı

### Adım 1: Yeni bir React Native projesi başlatın
```bash
npx react-native init CreditCardValidatorExample
cd CreditCardValidatorExample
```
### Adım 2: CreditCardValidator paketini yükleyin

```bash
npm install credit-card-validator
```
### Adım 3: Doğrulamayı React Native  projesinde uygulayın

```javascript
// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { validateCreditCardNumber } from 'credit-card-validator';

const App = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleValidate = () => {
    const result = validateCreditCardNumber(cardNumber);
    setIsValid(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kredi Kartı Doğrulayıcı</Text>
      <TextInput
        style={styles.input}
        placeholder="Kredi kartı numarasını girin"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
      />
      <Button title="Doğrula" onPress={handleValidate} />
      {isValid !== null && (
        <Text style={styles.result}>
          {isValid ? 'Kredi kartı numarası geçerli.' : 'Kredi kartı numarası geçersiz.'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    textAlign: 'center'
```
## Örneği Çalıştırma

Örnek projeyi çalıştırmak için:

### Metro derleyicisini başlatın:

```bash
npx react-native start
```
### Başka bir terminalde uygulamayı çalıştırın:

```bash
npx react-native run-android
# veya
npx react-native run-ios
```

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için LICENSE dosyasına bakın.

## Yararlanılan kaynaklar

 https://www.geeksforgeeks.org/luhn-algorithm/

 https://stackoverflow.com/questions/12310837/implementation-of-luhn-algorithm

https://mtateam.medium.com/react-native-ile-mobil-uygulama-geli%C5%9Ftirmek-istiyor-ancak-deneyeminiz-yoksa-bu-yaz%C4%B1-ba%C5%9Flaman%C4%B1z-30ba16da60a2

https://semicolon.dev/windows/how-to-install-chocolatey-using-cmd

https://reactnative.dev/docs/running-on-device?package-manager=npm

https://medium.com/@aysekalkan.tr/react-native-projemizi-fiziksel-android-cihazda-%C3%A7al%C4%B1%C5%9Ft%C4%B1rma-6b9c35b23a16#:~:text=Projemizi%20%C3%A7al%C4%B1%C5%9Ft%C4%B1rd%C4%B1%C4%9F%C4%B1m%C4%B1zda%20fiziksel%20cihaz%C4%B1m%C4%B1zda%20uygulamam%C4%B1z%C4%B1,native%20run%2Dandroid%20komutumuzla%20%C3%A7al%C4%B1%C5%9Ft%C4%B1rabiliriz.

https://mesutbeysulen.medium.com/java-geli%CC%87%C5%9Fti%CC%87rme-paketi%CC%87-jdk-kurulumu-ve-ortam-de%C4%9Fi%CC%87%C5%9Fkenleri%CC%87ni%CC%87-ayarlama-7f3d8380c36e

https://stackoverflow.com/questions/44228855/android-studio-avd-manager-is-not-visible

https://www.tulparyazilim.com.tr/tr/blog/react-native-kurulumu-adim-adim-kilavuz/

https://erdincuzun.com/react-native/02-03-native-code-ile-proje-olusturma/

https://ezranbayantemur.medium.com/react-native-windows-kurulumu-1a145a3e8639

https://medium.com/kodcular/react-native-nedir-7b333d319597

https://medium.com/we-talk-it/react-native-what-it-is-and-how-it-works-e2182d008f5e

https://www.geeksforgeeks.org/react-native-works/

https://muratbaseren.wordpress.com/2023/03/04/npm-icin-js-kutuphane-olusturma-ve-yayinlama/

## Yazarlar

Büşra Alkan

## Teşekkür

Bu pakete katkıda bulunan ve kullanan herkese teşekkürler.
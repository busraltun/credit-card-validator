import React, { useState } from 'react';
import { isValidCreditCardNumber } from 'credit-card-valid';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const App = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleValidate = () => {
    try {
      const isValidCard = isValidCreditCardNumber(cardNumber);
      setIsValid(isValidCard);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Kredi Kartı Numarası"
        onChangeText={setCardNumber}
        value={cardNumber}
        keyboardType="numeric"
      />
      <Button title="Kontrol Et" onPress={handleValidate} />
      {isValid !== null && (
        <Text style={styles.resultText}>
          {isValid ? 'Kredi Kartı Geçerli' : 'Geçersiz Kredi Kartı'}
        </Text>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;

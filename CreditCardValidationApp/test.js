import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';

describe('<App />', () => {
  it('validates a credit card number correctly', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText('Kredi Kartı Numarası');
    const button = getByText('Kontrol Et');

    fireEvent.changeText(input, '1234567812345670'); // Valid test credit card number
    fireEvent.press(button);

    expect(getByText('Kredi Kartı Geçerli')).toBeTruthy();
  });

  it('handles invalid credit card number correctly', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText('Kredi Kartı Numarası');
    const button = getByText('Kontrol Et');

    fireEvent.changeText(input, '1234'); // Invalid test credit card number
    fireEvent.press(button);

    expect(getByText('Geçersiz Kredi Kartı')).toBeTruthy();
  });
});

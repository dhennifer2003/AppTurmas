import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({ placeholder, value, onChangeText }) {
  return (
    <TextInput
    
      placeholder={placeholder}
      placeholderTextColor="#6B7280"
      value={value}
      style={[styles.input, { backgroundColor: '#29292e' }]} 
      onChangeText={onChangeText}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 16, // Equivalente ao p-4 do Tailwind
    borderRadius: 8, // Equivalente ao rounded-lg
    color: '#fff', // Equivalente ao text-white
    marginVertical: 8, // Equivalente ao my-2
    width: '100%', // Equivalente ao w-full
  },
});

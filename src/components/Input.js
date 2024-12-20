import React from 'react';
import { TextInput } from 'react-native';

export default function Input({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      className="bg-dark p-4 rounded-lg text-white my-2"
      placeholder={placeholder}
      placeholderTextColor="#6B7280"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

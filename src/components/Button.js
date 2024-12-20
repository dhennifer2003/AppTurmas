import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress, variant = "primary" }) {
  const bgColor = variant === "primary" ? "#28a745" : "#29292E";  // Verde para 'c', cinza para outros
  const textColor = "#fff";
  

  return (
    <Pressable style={[styles.button, { backgroundColor: bgColor }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 12,
    
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
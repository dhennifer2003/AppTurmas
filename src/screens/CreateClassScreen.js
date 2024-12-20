import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CreateClassScreen({ navigation }) {
  const [className, setClassName] = useState('');

  const handleCreateClass = () => {
    console.log(`Classe criada: ${className}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Turma</Text>
      <Text style={styles.subtitle}>Crie uma turma para adicionar pessoas</Text>

      <TextInput
        placeholder="Nome da turma"
        value={className}
        onChangeText={setClassName}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateClass}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#bbb',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    backgroundColor: '#000',
    color: '#fff',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

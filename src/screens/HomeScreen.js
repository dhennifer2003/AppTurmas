import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Turmas</Text>
      <Text style={styles.subtitle}>Jogue com sua turma</Text>

      <Button title="Nome da Turma 1" onPress={() => navigation.navigate('ManageClass')} variant="default" />
      <Button title="Nome da Turma 2" onPress={() => navigation.navigate('ManageClass')} variant="default" />
      <View style={{marginTop:20}}> 
      <Button title="Criar nova turma" onPress={() => navigation.navigate('CreateClass')} variant="primary" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#bbb',
    marginBottom: 24,
  },
});

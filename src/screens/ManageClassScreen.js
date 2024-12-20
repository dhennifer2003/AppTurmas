import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

export default function ManageClassScreen({ navigation }) {
  const [participant, setParticipant] = useState('');
  const [participants, setParticipants] = useState([]);

  const handleAddParticipant = () => {
    setParticipants([...participants, participant]);
    setParticipant('');
  };

  const handleRemoveParticipant = (name) => {
    setParticipants(participants.filter((p) => p !== name));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome da Turma</Text>
      <Text style={styles.subtitle}>Adicione a galera e separe os times</Text>

      <Input
        placeholder="Nome do participante"
        value={participant}
        onChangeText={setParticipant}
        style={styles.input}
      />
      <Button title="Adicionar" onPress={handleAddParticipant} />

      <FlatList
        data={participants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.participantRow}>
            <Text style={styles.participantText}>{item}</Text>
            <Pressable onPress={() => handleRemoveParticipant(item)}>
              <Text style={styles.removeText}>Remover</Text>
            </Pressable>
          </View>
        )}
      />

      <Button title="Remover turma" variant="dark" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#333',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 35,
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
    backgroundColor: '#fff',
    color: '#333',
    marginBottom: 16,
  },
  participantRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  participantText: {
    color: '#fff',
    fontSize: 16,
  },
  removeText: {
    color: '#FF6347',
    fontWeight: 'bold',
  },
});

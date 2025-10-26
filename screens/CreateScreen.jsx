import { StyleSheet, Text, View, TextInput, Pressable, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';

const CreateScreen = ({ addItem }) => {
  const [taskName, setTaskName] = useState('');
  const [stock, setStock] = useState('');

  const handleAddTask = () => {
    if (!taskName || !stock) {
      Alert.alert('Error', 'Please enter task name and stock');
      return;
    }
    addItem(taskName, stock);
    setTaskName('');
    setStock('');
    Alert.alert('Success', `Task "${taskName}" added!`);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
      <Text style={styles.title}>Add New Task</Text>

      <Text style={styles.label}>Task Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task name"
        placeholderTextColor="#780000"
        value={taskName}
        onChangeText={setTaskName}
      />

      <Text style={styles.label}>Stock</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter stock quantity"
        placeholderTextColor="#780000"
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
      />

      <Pressable style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
    </ScrollView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF0D5', // cream
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003049', // dark blue
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#780000', // dark red
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FDF0D5', // cream input
    borderWidth: 1.5,
    borderColor: '#C1121F', // red border
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    color: '#003049', // dark blue text
  },
  button: {
    backgroundColor: '#C1121F', // red button
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FDF0D5', // cream
    fontSize: 16,
    fontWeight: '700',
  },
});

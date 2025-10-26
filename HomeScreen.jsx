import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import AllItems from './screens/AllItems';
import CreateScreen from './screens/CreateScreen';

const HomeScreen = ({navigation}) => {
  const [view, setView] = useState(0);
  const [data, setData] = useState([
    { id: 1, name: 'Item 1', stock: 10 },
    { id: 2, name: 'Item 2', stock: 5 },
    { id: 3, name: 'Item 3', stock: 0 },
    { id: 4, name: 'Item 4', stock: 2 },
  ]);

  const addItem = (name, stock) => {
    const newItem = { id: data.length + 1, name, stock: parseInt(stock) };
    setData([...data, newItem]);
    setView(0); // switch to AllItems
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.buttonContainer}>
        {['All Tasks', 'Low Stocks', 'Create'].map((label, index) => (
          <Pressable
            key={index}
            onPress={() => setView(index)}
            style={[styles.button, view === index && styles.buttonActive]}
          >
            <Text style={[styles.buttonText, view === index && styles.buttonTextActive]}>
              {label}
            </Text>
          </Pressable>
        ))}
      </View>
      <View>
        <Pressable style={styles.dashboradButton}>
          <Text styles={styles.buttonText}  onPress={() =>navigation.navigate('Dashboard')}>Dashborad</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        {view === 0 && <AllItems data={data} />}
        {view === 1 && <AllItems data={data.filter(item => item.stock <= 3)} />}
        {view === 2 && <CreateScreen addItem={addItem} />}
      </View>
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF0D5', // cream background
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003049', // dark blue
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#C1121F', // red border
    backgroundColor: '#FDF0D5', // cream background
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: '#C1121F', // red active
  },
  buttonText: {
    color: '#003049', // dark blue text
    fontWeight: '900',
  },
  buttonTextActive: {
    color: '#FDF0D5', // cream text
    fontWeight: '700',
  },
  content: {
    flex: 1,
  },

  dashboradButton:{
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#C1121F', // red border
    backgroundColor: '#FDF0D5', // cream background
    alignItems: 'center',
    marginBottom: 10,
  }
});

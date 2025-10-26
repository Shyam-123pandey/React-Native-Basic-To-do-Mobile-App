import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📦 Inventory Dashboard</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#003049' }]}
          onPress={() => navigation.navigate('CreateItem')}
        >
          <Text style={styles.cardText}>➕ Create Item</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#669BBC' }]}
          onPress={() => navigation.navigate('AllItems')}
        >
          <Text style={styles.cardText}>📋 All Items</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#C1121F' }]}
          onPress={() => navigation.navigate('LowStock')}
        >
          <Text style={styles.cardText}>⚠️ Low Stock</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#780000' }]}
          onPress={() => navigation.navigate('OutOfStock')}
        >
          <Text style={styles.cardText}>❌ Out of Stock</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#FDF0D5' }]}
          onPress={() => navigation.navigate('Completed')}
        >
          <Text style={[styles.cardText, { color: '#003049' }]}>✅ Mark as Done</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#FDF0D5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#003049',
    marginBottom: 25,
  },
  cardContainer: {
    width: '90%',
  },
  card: {
    borderRadius: 15,
    paddingVertical: 20,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FDF0D5',
  },
});

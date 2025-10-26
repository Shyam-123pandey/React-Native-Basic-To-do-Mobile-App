import { useState } from 'react';
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const AllItems = ({ data, setData }) => {
  const [tasks, setTasks] = useState(data);

  const handleDelete = id => {
    const newData = tasks.filter(item => item.id !== id);
    setTasks(newData);
    setData(newData);
  };

  const handleMarkDone = id => {
    const newData = tasks.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setTasks(newData);
  };

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <View style={[styles.itemCard, item.done && styles.itemDone]}>
          <Text
            style={[
              styles.itemName,
              item.done && { textDecorationLine: 'line-through', color: '#003049' },
            ]}
          >
            {item.name}
          </Text>
          <View style={styles.actions}>
            <Pressable onPress={() => handleMarkDone(item.id)}>
              <Text style={styles.done}>✓</Text>
            </Pressable>
            <Pressable onPress={() => Alert.alert('Edit feature coming soon')}>
              <Text style={styles.edit}>✎</Text>
            </Pressable>
            <Pressable onPress={() => handleDelete(item.id)}>
              <Text style={styles.delete}>🗑</Text>
            </Pressable>
          </View>
        </View>
      )}
    />
  );
};

export default AllItems;

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  itemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#669BBC',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FDF0D5',
    flex: 1,
  },
  itemDone: {
    backgroundColor: '#FDF0D5',
  },
  actions: {
    flexDirection: 'row',
    gap: 15,
  },
  done: { color: '#003049', fontSize: 18 },
  edit: { color: '#780000', fontSize: 18 },
  delete: { color: '#C1121F', fontSize: 18 },
});

// HomeScreen.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tasks from '../../components/Tasks';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  // Sample tasks data
  const tasks = [
    { id: 1, title: 'Complete homework', completed: false },
    { id: 2, title: 'Read a book', completed: true },
    // Add more tasks as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTextBold}>Good morning Evans!</Text>
          <Text style={styles.headerTextMedium}>Task Manager</Text>
        </View>
        <View>
          <Icon name="notifications" size={30} color="#3498db" />
        </View>
      </View>

      <View style={styles.section}>
        <View>
          <Text style={styles.sectionTextBold}>Summary</Text>
        </View>
        {/* Add your Dropdown component here */}
        <View>
          <Text style={styles.sectionTextBold}>Today</Text>
          <Text style={styles.sectionTextMedium}>Monday, 2 Nov</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statTextBold}>Completed</Text>
          <Text style={styles.statTextMedium}>21</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statTextBold}>Incomplete</Text>
          <Text style={styles.statTextMedium}>21</Text>
        </View>
      </View>

      <View style={styles.tasksContainer}>
        <Text style={styles.tasksHeader}>Tasks</Text>
        {/* Render Tasks component and pass tasks data */}
        <Tasks tasks={tasks} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingTop: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTextBold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  headerTextMedium: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#7f8c8d',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTextBold: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  sectionTextMedium: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#7f8c8d',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statBox: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    padding: 14,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  statTextBold: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  statTextMedium: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#7f8c8d',
  },
  tasksContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  tasksHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
});

export default HomeScreen;

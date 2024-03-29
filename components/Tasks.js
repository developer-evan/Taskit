import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Tasks = () => {
  const allTasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ];

  const completedTasks = [
    { id: 2, title: 'Task 2', completed: true },
    { id: 4, title: 'Task 4', completed: true },
  ];

  const incompleteTasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 3, title: 'Task 3', completed: false },
    { id: 3, title: 'Task 3', completed: false },
    { id: 3, title: 'Task 7', completed: false },
    { id: 3, title: 'Task 8', completed: false },
    { id: 3, title: 'Task 9', completed: false },
    

  ];

  const [selectedTab, setSelectedTab] = useState('AllTasks');
  const [tasks, setTasks] = useState(allTasks);

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    switch (tab) {
      case 'AllTasks':
        setTasks(allTasks);
        break;
      case 'Completed':
        setTasks(completedTasks);
        break;
      case 'Incomplete':
        setTasks(incompleteTasks);
        break;
      default:
        setTasks(allTasks);
    }
  };

  return (
    <View style={styles.container}>
       
      <View style={styles.tabsContainer}>

        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'AllTasks' && styles.selectedTab]}
          onPress={() => handleTabPress('AllTasks')}
        >
          <Text style={styles.tabButtonText}>All Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Completed' && styles.selectedTab]}
          onPress={() => handleTabPress('Completed')}
        >
          <Text style={styles.tabButtonText}>Completed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Incomplete' && styles.selectedTab]}
          onPress={() => handleTabPress('Incomplete')}
        >
          <Text style={styles.tabButtonText}>Incomplete</Text>
        </TouchableOpacity>
      </View>

      {/* Display corresponding data based on the selected tab */}
      <View style={styles.dataContainer}>
        {tasks.map((task) => (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
                width:'100%',
                backgroundColor:'lightgrey',
                height:120,
                borderRadius:10,
                padding:10,
              }} key={task.id}
              >
          <Text  style={styles.dataText}>
            {task.title} - {task.completed ? 'Completed' : 'Incomplete'}
          </Text>
            </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    overflow: 'scroll',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    backgroundColor: 'lightgrey',
    padding: 6,
    borderRadius: 15,
  },
  tabButton: {
    paddingHorizontal:6,
    paddingVertical: 4,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: 'grey',
    // color: 'white',
  },
  selectedTab: {
    backgroundColor: '#1caafc',
    color: 'white',
  },
  tabButtonText: {
    fontSize: 15,
    // fontWeight: 'bold',
    color:'grey'
  },
  dataContainer: {
    padding: 20,
    

  },
  dataText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Tasks;

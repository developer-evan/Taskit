import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Tasks from '../../components/Tasks';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTextBold}>Good morning Evans!</Text>
          <Text style={styles.headerTextMedium}>Task Manager</Text>
        </View>
        <View>
          <Button title="Tasks" onPress={() => navigation.navigate('Detail')} />
        </View>
      </View>

      <View style={styles.section}>
        <View>
          <Text style={styles.sectionTextBold}>Summary</Text>
        </View>
        <View>
          {/* Dropdown */}
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
       <View 
       style={{marginTop:20,marginBottom:20}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Tasks</Text>
        </View>
      <Tasks />
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
    fontSize: 15,
    fontWeight: 'bold',
  },
  headerTextMedium: {
    fontSize: 15,
    fontWeight: 'medium',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTextBold: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statBox: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 14,
    borderRadius: 10,
    width: '48%',
  },
  statTextBold: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  statTextMedium: {
    fontSize: 15,
    fontWeight: 'medium',
  },
});

export default HomeScreen;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './navigation/MainContainer';

export default function App() {
  return (
    <MainContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#b3e6ff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

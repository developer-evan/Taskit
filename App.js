import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './navigation/MainContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <MainContainer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    // backgroundColor: '#b3e6',
    backgroundColor:'#daefda'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

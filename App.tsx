import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './scripts/store';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Welcome to your Redux-powered app!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

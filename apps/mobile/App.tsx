import { HomeIcon, HomeScreen } from '@acme/feature-home';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TurndownService from 'turndown-rn';

const trndwn = new TurndownService();

export default function App() {
  return (
    <View style={styles.container}>
      <HomeIcon style={{ fontSize: 64 }} />
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
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

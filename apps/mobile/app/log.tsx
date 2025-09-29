import { Stack } from 'expo-router';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

export default function LogScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Diary' }} />
      <View style={styles.card}>
        <Text style={styles.title}>Diary Preview</Text>
        <Text style={styles.body}>Logging meals and snacks will appear here.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 24,
  },
  card: {
    backgroundColor: '#111c44',
    borderRadius: 20,
    padding: 24,
    marginTop: 16,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 8,
  },
  body: {
    color: '#94a3b8',
  },
});

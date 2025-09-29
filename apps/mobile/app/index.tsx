import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

const useMacroSummary = () => {
  return useMemo(
    () => ({
      calories: { consumed: 1240, target: 2000 },
      protein: { consumed: 80, target: 150 },
      carbs: { consumed: 130, target: 220 },
      fat: { consumed: 40, target: 70 },
    }),
    [],
  );
};

export default function HomeScreen() {
  const macros = useMacroSummary();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.title}>KaloriSayar</Text>
        <Text style={styles.subtitle}>Enerjinizi yönetin · Manage your energy</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Bugünkü Durum / Today</Text>
        {Object.entries(macros).map(([key, value]) => (
          <View key={key} style={styles.row}>
            <Text style={styles.rowLabel}>{key.toUpperCase()}</Text>
            <Text style={styles.rowValue}>
              {value.consumed} / {value.target}
            </Text>
          </View>
        ))}
      </View>

      <Link style={styles.link} href="/log">
        Günlük / Diary
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 24,
    gap: 24,
  },
  header: {
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 16,
    color: '#cbd5f5',
  },
  card: {
    backgroundColor: '#111c44',
    borderRadius: 20,
    padding: 24,
    gap: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f8fafc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowLabel: {
    color: '#94a3b8',
  },
  rowValue: {
    color: '#f8fafc',
    fontWeight: '600',
  },
  link: {
    color: '#38bdf8',
    fontSize: 18,
    fontWeight: '600',
  },
});

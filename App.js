import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.gameContainer}>

          <View style={styles.titles}>
            <Text style={styles.title}>God of War: Ragnarok</Text>
            <Text style={styles.subTitle}>Available November 9, 2022</Text>
          </View>

      </View>

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
  gameContainer: {
    width: '100%',
    height: '100%',

  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },

  title: {

  },

  subTitle: {

  }
});

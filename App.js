import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.gameContainer}>
        <ImageBackground
          source={require('../FirstApp/assets/cropped-720-1520-1079546.png')}
          style={styles.image}
        />
        <View style={styles.titles}>          
          <Image
            source={require('./assets/5ede4a3fb760540004f2c5e9.png')}
            style={styles.logo}
          />
          <Text style={styles.subTitle}>Tanjiro returns in 2023</Text>
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
    marginTop: '15%',
    width: '100%',
    alignItems: 'center',
    marginBottom: '10%'
  },
  subTitle: {
    fontSize: 16,
    color: '#5c5e62',
    fontWeight: '500'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  },
  logo: {
    width: '45%',
    height: '45%',
    resizeMode: 'contain',
  }
});

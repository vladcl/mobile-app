import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './styles';

const AnimeItem = (props) => {
    return (
        <View style={styles.gameContainer}>
        <ImageBackground
          source={require('../../assets/cropped-720-1520-1079546.png')}
          style={styles.image}
        />
        <View style={styles.titles}>          
          <Image
            source={require('../../assets/5ede4a3fb760540004f2c5e9.png')}
            style={styles.logo}
          />         
          <Text style={styles.subTitle}>2023</Text>
        </View>
      </View>
    )
}

export default AnimeItem;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
        fontSize: 17,
        color: '#000000',
        fontStyle: 'italic',
        fontWeight: '500',   
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      logo: {
        width: '46%',
        height: '46%',
        resizeMode: 'contain',
      }
});

export default styles;
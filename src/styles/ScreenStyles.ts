import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#000000',
    },
    subtitle: {
      fontSize: 16,
      color: '#000000',
      marginBottom: 20,
      textAlign: 'center', // Optional, um den Text zentriert darzustellen
    },
    inputLogin: {
      width: '80%',
      height: '8.5%',
      borderWidth: 1,
      borderColor: '#5500a1',
      padding: 10,
      marginBottom: 20,
      borderRadius: 5,
      fontSize: 15,
    },
    button: {
      backgroundColor: '#5500a1',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 20,
      width: '50%',
    },
    buttonText: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold',
    },
  });

  export default styles;

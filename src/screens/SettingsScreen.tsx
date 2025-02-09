import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../styles/ScreenStyles';

const SettingsScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('../assets/Social_Cleaned_Proper.png')} 
      style={styles.background}  // Globaler Style für den Hintergrund
      resizeMode="cover"
    >
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Einstellungen</Text>
    </View>
    </ImageBackground>
  );
};



export default SettingsScreen;

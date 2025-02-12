import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../styles/ScreenStyles';  // Ich gehe davon aus, dass du ScreenStyles benutzt

const HomeScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('../assets/Social_Cleaned_Proper.png')}
      style={styles.background}  // Globaler Style für den Hintergrund
      resizeMode="cover"
    >
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>
        Hier werden später Neuigkeiten und Events aus der Umgebung aufgelistet
      </Text>
    </View>
    </ImageBackground>
  );
};

export default HomeScreen;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ImageBackground ,Alert } from 'react-native';
import MyButton from '../components/Button';
import styles from '../styles/ScreenStyles';

const HomeScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('../assets/Social_Cleaned_Proper.png')}
      style={styles.background}  // Globaler Style für den Hintergrund
      resizeMode="cover"
    >
    <View style={styles.container}>
      <Text style={styles.title}>SocialDates</Text>
      <Text style={styles.subtitle}>
        Triff Gleichgesinnte und knüpfe Kontakte.{'\n'}
        <Text style={{ fontWeight: 'bold' }}>Erlebt, entdeckt, engagiert euch.{'\n'}</Text>
        Gemeinschaft macht stark.
      </Text>

      <MyButton
        title="Login"
        onPress={() => Alert.alert('Hallo', 'Du hast gedrückt!')}
      />
      <MyButton
        title="Registrieren"
        onPress={() => Alert.alert('Hallo', 'Du hast gedrückt!')}
      />
    </View>
    </ImageBackground>
  );
};



export default HomeScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import styles from '../styles/ScreenStyles';

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      console.log('Eingeloggt mit:', username, password);
      onLogin();  // Hier wird der Login abgeschlossen und die App weitergeleitet
    } else {
      Alert.alert('Bitte Benutzername und Passwort eingeben!');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/Social_Cleaned_Proper.png')}
      style={styles.background}  // Globaler Style für den Hintergrund
      resizeMode="cover"
    >
    <View style={styles.container}>
      <Text style={styles.title}>SocialDates</Text>
      <Text style={styles.subtitle}>Dates mit Herz für die Gemeinschaft.</Text>
      <TextInput
        placeholder="Benutzername"
        value={username}
        onChangeText={setUsername}
        style={styles.inputLogin}
      />
      <TextInput
        placeholder="Passwort"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.inputLogin}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Anmelden</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Registrieren</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};



export default Login;

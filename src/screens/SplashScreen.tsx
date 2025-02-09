import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();  // Nach 3 Sekunden zum nächsten Bildschirm
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Social.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5500a1',
  },
  image: {
    width: 450,
    height: 950,
    resizeMode: 'cover',
  },
});

export default SplashScreen;

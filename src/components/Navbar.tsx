import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MatchScreen from '../screens/MatchScreen';
import LocalPlaces from '../screens/LocalPlacesScreen';
import TabBarIcon from './TabBarIcon'; // Importiere die ausgelagerte TabBarIcon-Komponente




const Tab = createBottomTabNavigator();

// ✅ `getTabBarIcon` außerhalb der `Navbar`-Komponente definieren
const getTabBarIcon = (routeName: string, color: string, size: number) => {
  const icons: Record<string, string> = {
    Home: 'home-outline',
    Profile: 'person-outline',
    Settings: 'settings-outline',
    MatchFinder: 'heart-outline',
    LocalPlaces: 'globe-outline',
  };

  return <TabBarIcon name={icons[routeName] || 'help-circle-outline'} color={color} size={size} />;
};

const Navbar: React.FC = () => {
  return (

      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size), // ✅ KEIN INLINE-CODE MEHR!
          tabBarActiveTintColor: '#ff00e4',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: 'transparent',
              height: 60,
              position: 'absolute',
              elevation: 0,
              borderTopWidth: 0,
            },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="LocalPlaces" component={LocalPlaces} />
        <Tab.Screen name="MatchFinder" component={MatchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
};

export default Navbar;

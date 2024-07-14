import { View, Text, StyleSheet, Platform, Sta} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/login'

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default App
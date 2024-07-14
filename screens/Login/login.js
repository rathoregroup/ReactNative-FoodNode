import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Platform, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomBtn from '../../components/CustomBtn/CustomBtn'
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/inUse/login.png')} style={styles.bg}>
        <View style={styles.innerContainer}>
          
          <View>
            <Text style={styles.txt}>Welcome to foodnode</Text>
          </View>
          
          <View style={styles.btnContainer}>
            <Image source={require('../../assets/inUse/Group.png')}/>
            <CustomBtn title='Login' />
            <CustomBtn title='RestaurantLogin'/>
          </View>

          <View style={{alignSelf: 'flex-start',}}>
              <Text style={styles.signupText}>create account</Text>
              <TouchableOpacity style={styles.signUpBtn}>
                <Text style={styles.signUpBtnText}>SIGN UP</Text>
                <Ionicons name="chevron-forward-outline" size={15} color="white" />
              </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}



export default Login
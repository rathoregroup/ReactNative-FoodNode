import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Platform, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomBtn from '../../components/CustomBtn/CustomBtn'
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/inUse/login.png')} style={styles.bg}>
        <View style={{margin: 15, alignItems:'center', flex: 1, width: '90%', paddingHorizontal: 15}}>
          
          <View>
            <Text style={styles.txt}>Welcome to foodnode</Text>
          </View>
          
          <View style={{alignItems: 'center', width: '90%', flex: 1, justifyContent: 'center'}}>
            <Image source={require('../../assets/inUse/Group.png')}/>
            <CustomBtn title='Login' />
            <CustomBtn title='RestaurantLogin'/>
          </View>

          <View style={{alignSelf: 'flex-start',}}>
              <Text style={{color: '#ffffff', fontWeight: '700', fontSize: 28, marginBottom: 5}}>create account</Text>
              <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#e5293e', padding: 5, alignItems: 'center', justifyContent: 'space-evenly', borderRadius: 20, width: '50%', height: 35, }}>
                <Text style={{color: '#ffffff', fontWeight: '700', fontSize: 14}}>SIGN UP</Text>
                <Ionicons name="chevron-forward-outline" size={15} color="white" />
              </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  bg: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    alignItems: 'center',
  },
  txt: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700'
  }
})


export default Login
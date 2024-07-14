import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomBtn = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn:{
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 42,
        borderRadius: 20,
        marginVertical: 15,
    },
    text: {
        fontWeight: '700',
        fontSize: 17,
        lineHeight: 18.4,
    }
})

export default CustomBtn
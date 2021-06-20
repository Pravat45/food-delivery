import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Onboarding from './src/componets/Onboarding'

export default function App() {
  return (
    <View style={styles.container}>
     <Onboarding />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  }
})
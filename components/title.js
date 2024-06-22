import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View>
      <Text style ={styles.title}>Quizzler</Text>
    </View>
  )
}

export default Title
const styles =StyleSheet.create({
    title:{
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    }
    })
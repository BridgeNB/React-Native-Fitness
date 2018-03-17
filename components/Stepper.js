import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

const Stepper = ({ max, unit, step, value, onIncrement, onDecrement }) => {
  return (
    <View>
      <Text>stepper</Text>
      <View>
        <TouchableOpacity onPress={onDecrement}>
          <FontAwesome name="minus" size={30} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement}>
          <FontAwesome name="plus" size={30} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Stepper

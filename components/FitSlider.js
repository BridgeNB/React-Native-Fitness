import React from 'react'
import { View, Slider, StyleSheet, Text } from 'react-native'

const FitSlider = ({ max, unit, step, value, onChange }) => {
  return (
    <View>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}

export default FitSlider

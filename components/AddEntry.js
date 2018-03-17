import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'
import FitSlider from './FitSlider'
import Stepper from './Stepper'
import DateHeader from './DateHeader'
import TextButton from './TextButton'

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}

export default class AddEntry extends Component {
  state = {
    run: 0,
    bike:0,
    swim: 1,
    sleep: 0,
    eat: 6,
  }
  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric)
    this.setState((state) => {
      const count = state[metric] + step
      return {
        ...state,
        [metric]: count > max ? max : count,
      }
    })
  }
  decrement = (metric) => {
    const { step } = getMetricMetaInfo(metric)
    this.setState((state) => {
      const count = state[metric] - step
      return {
        ...state,
        [metric]: count < 0 ? 0 : count,
      }
    })
  }
  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value
    }))
  }
  submit = () => {
    this.setState(() => ({run: 0, bike: 0, swim: 0, sleep: 0, eat: 0}))
  }
  reset = () => {
    const key = timeToString()
  }
  render() {
    const metaInfo = getMetricMetaInfo()

    if (false) {
      return (
        <View>
          <Ionicons
            name={'ios-happy-outline'}
            size={100}
          />
          <Text>You already logged your information for today.</Text>
          <TextButton onPress={this.reset}>
            Reset
          </TextButton>
        </View>
      )
    }

    return (
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()}/>
        <Text>{JSON.stringify(this.state)}</Text>
        {Object.keys(metaInfo).map((key) => {
          const {getIcon, type, ...rest } = metaInfo[key]
          const value = this.state[key]
          return (
            <View key={key}>
              {getIcon()}
              {type == 'slider'
                ? <FitSlider
                  value={value}
                  onChange={(value) => this.slide(key, value)}
                  {...rest}
                  />
                : <Stepper
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                  />
              }
            </View>
          )
        })}
        <SubmitBtn onPress={this.submit} />
      </View>
    )
  }
}

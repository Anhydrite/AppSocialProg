import React from 'react'
import {View,Text} from 'react-native'

export default class App extends React.Component{
  render(){
    const {langage} = this.props.navigation.state.params

    return (
      <View><Text>{langage}</Text><Text>{langage}</Text><Text>{langage}</Text><Text>{langage}</Text><Text>{langage}</Text><Text>{langage}</Text></View>
    )
  }
}

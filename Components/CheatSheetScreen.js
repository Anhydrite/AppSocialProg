import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'
import data from '../Donnees/Tips'
import NavigationActions from 'react-navigation'
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.langages=data
  }
  _navigationToTipsFromLanguage(langage){
    // this.props.navigation.navigate('CheatSheetScreen',{},NavigationActions.navigate({routeName:'Detail'}))
    this.props.navigation.navigate('DetailFromLangage',{langage:langage})

  }
  render(){
    return (
      <FlatList data={this.langages}
      keyExtractor={(item)=>item.langage.toString()}
      renderItem={({item})=><View style={styles.view}>
      <TouchableOpacity onPress={()=>this._navigationToTipsFromLanguage(item.langage.toString())}>
      <Text>{item.langage}</Text>
      </TouchableOpacity>
    </View>}/>
    )
  }
}

const styles = StyleSheet.create({
  view:{
    flex:1,
    flexDirection:"column",
    alignItems:"center"
  }
})

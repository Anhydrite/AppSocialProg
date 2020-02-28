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
      <View style={styles.container}>
      <Text style={styles.text}>{item.langage}</Text>
      </View>
      </TouchableOpacity>
    </View>}/>
    )
  }
}

const styles = StyleSheet.create({
  view:{
    marginTop:30,
    flex:1,
    flexDirection:"column",
    alignItems:"center",

  },
  container:{
  borderWidth: 5,
  backgroundColor: '#d6d7da',
  borderColor: '#d6d7da',
  borderRadius: 10,
},
text:{
  fontSize:30
}
})

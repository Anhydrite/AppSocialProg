import React from "react"
import {View,Text,Image,StyleSheet} from 'react-native'
import films from "../Donnees/donnees.js"
import { FlatList } from "react-native-gesture-handler"
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType"

export default class Fil extends React.Component{
    constructor(props){
        super(props)
        this.data = films
    }
    render(){
        return (
            <FlatList data={this.data}
            keyExtractor={(item)=>item.user.id.toString()}
            renderItem={({item})=> <View>
              <View style={styles.Boite1}>
                <Image style={styles.avatar} source={require('../assets/splash.png')}/>
              </View>
              <View style={styles.Boite2}>
                <View style={styles.pseudo}>
                  <Text>{item.user.pseudo}</Text>
                </View>
                <View style={styles.date}>
                  <Text>{item.date}</Text>
                </View>
              </View>
              <Text style={styles.commentaire}>{item.commentaire}</Text>
            </View>}
            />
        )
    }
}


const styles = StyleSheet.create({
    Boite1:{
      flex:1,
      alignItems:"center"
    },
    Boite2:{
      flex:1,
      flexDirection:'row'
    },
    avatar:{
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop:10
    },
    pseudo:{
      flex:2,
      alignItems:"flex-start",
        marginLeft:20
    },
    date:{
      flex:2,
      alignItems:"flex-end",
      marginRight:20

    },
    commentaire:{
      marginTop:10,
      marginLeft:5,
      marginRight:5,
      textAlign:"justify"
    }
  });

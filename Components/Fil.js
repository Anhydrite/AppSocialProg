import React from "react"
import {View,Text,Image,StyleSheet} from 'react-native'
import films from "../Donnees/donnees.js"
import { FlatList } from "react-native-gesture-handler"
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType"

export default class Fil extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <FlatList data={this.data}
            keyExtractor={(item)=>item.user.id.toString()}
            renderItem={({item})=> <View>
                <View style={{flexDirection:"column",alignItems:"center"}}>
            <Image style={styles.avatar} source={require('../assets/splash.png')}></Image>
            <View style={styles.viewPseudoText}>
            </View>

            <View style={{flexDirection:"column"}}>
            <Text style={styles.pseudo}>{item.user.pseudo}</Text>
            <Text style={styles.text}>{item.date}</Text>
            </View>

            </View>

            </View>}
            />
        )
    }
}


const styles = StyleSheet.create({
    avatar:{
        width: 1000,
        height: 100,
        flex:1
        // resizeMode: 'contain'  ,

    },
    listActus:{
        flexDirection : "column",
        backgroundColor: "yellow",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    text:{
        flex:1,
        flexDirection:"row",
    },
    viewPseudoText:{
        flex:1,
        justifyContent: "space-between",
        flexDirection:"row"
    },
    pseudo:{
        flex:2,
        alignItems:"left",
        justifyContent:"left"
    },
    date:{
        flex:2,
        alignItems:"right",
        justifyContent:"right"
    }
  });

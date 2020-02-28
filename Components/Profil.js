import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import donnees from "../Donnees/profil.js"
import { FlatList } from "react-native-gesture-handler"


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.data = donnees
  }
  render() {
    return (
      <View>
        <View style={styles.boiteHaut}>
          <View style={{ flex: 2,alignItems: "center",justifyContent:"center", backgroundColor: '' }}>
            <Image style={styles.avatar} source={require('../assets/splash.png')} />
          </View>
          <View style={{flex:2,flexDirection:"column"}}>
            <View style={{ flex: 2, alignItems: "stretch", backgroundColor: '' }}>
              <Text>{this.data[0].pseudo}</Text>
              <View style={{ flex: 3, flexDirection: "row", alignItems: "center", backgroundColor: '' }}>
                <Text style={{ flex: 3 }}>{this.data[0].abonnés} abonnés</Text>
                <Text style={{ flex: 3 }}>{this.data[0].abonnements} abonnements</Text>
                <Text style={{ flex: 3 }}>{this.data[0].publications} publications</Text>
              </View>
            </View>
            <View style={{ flex: 1,justifyContent:"center", backgroundColor: '', alignItems:"flex-start" }}>
              <View>
                <Text>{this.data[0].description}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    justifyContent:"center"
  },
  boiteHaut: {
    flexDirection: "row",
    justifyContent:"center",
  }
});

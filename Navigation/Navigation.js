import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Fil from '../Components/Fil'
import CheatSheetScreen from '../Components/CheatSheetScreen'
import Profil from '../Components/Profil'
import DetailFromLangage from '../Components/DetailFromLangage'


const testSwitch = createBottomTabNavigator({
  CheatSheetScreen:{screen : createStackNavigator({
    CheatSheetScreen:{
      screen:CheatSheetScreen
    },
    DetailFromLangage:{
      screen:DetailFromLangage
    }
  }),},

  Fil:{screen:Fil},
  Profil:{screen : Profil}
},{
  initialRouteName: "Fil"
})

export default createAppContainer(testSwitch)

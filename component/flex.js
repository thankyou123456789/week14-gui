import React from 'react'
import {View,Text} from 'react-native'

const App=()=>{
  return(
    <View style={{flex:1,margin:20}}>
        <View style={{flex:1,backgroundColor:'black'}}>
          <Text style={{color:'lightblue'}}>Hello Worlds</Text>
        </View>
        <View style={{flex:2,backgroundColor:'#9400d3'}}></View>
        <View style={{flex:3,backgroundColor:'#800000'}}></View>
    </View>
  )
}
export default App;
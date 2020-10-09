import React from 'react'
import {View,Text,Image} from 'react-native'

const App=()=>{
  return(
    <View>
        <Image 
          style={{width:'100%',height:250}}
          source={require('./images/cat.jpg')}
        />

        <Image 
          style={{width:'100%',height:250}}
          source={require('./images/cat2.jpg')}
        />
        <Image 
          style={{width:'100%',height:250}}
          source={require('./images/cat3.jpg')}
        />
    </View>
  )
}
export default App;
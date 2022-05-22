// SignUp.js
import React from 'react'
import { StyleSheet, Text,View, Button,Image, TouchableOpacity, alert } from 'react-native'


export default class PickRole extends React.Component {
  state = { email: '', password: '',name: ''}
//handleSignUp = () => {
  // TODO: Firebase stuff...
  //console.log('handleSignUp')
//}
render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://i.imgur.com/tkMsHUW.png',}}
          style={{ marginTop : -85, width: 206, height: 200 }}
      />
        

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Trang chủ')}
        >
          
          <Text style={{ fontSize : 18 }} > 
          
          Gia sư</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Trang chủ')}
        >
          
          <Text style={{ fontSize : 18 }} > 
          
          Phu huynh </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate('Trang chủ')}
        >
          
          <Text style={{ fontSize : 18 }} > 
            Tiếp theo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity

          onPress={() => this.props.navigation.goBack('Start')}
        >
          
          <Text style={{ fontSize : 18 , marginTop: 15}} > 
            Quay lại
          </Text>
          
        </TouchableOpacity>
      </View>
      
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop : 0,
    backgroundColor: `#A6F3B7`
    
  },
  
 
  button: {
    alignItems: 'center',
    marginTop : 20,
    width : '80%',
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: '#ffffff',
  },
  button2: {
    width : '50%',
    alignItems: 'center',
    marginTop : 18,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: '#E48257',
  },
  button3: {
    alignItems: 'center',
    marginTop : 18,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#E48257',
  },
  

})
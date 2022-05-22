// SignUp.js
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button,Image,TouchableOpacity } from 'react-native'
export default class Start extends React.Component {
  state = { email: '', password: '',name: '',  }
//handleSignUp = () => {
  // TODO: Firebase stuff...
  //console.log('handleSignUp')
//}
render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
           
            uri: 'https://i.imgur.com/tkMsHUW.png',
          }  
          }
          style={{ marginTop : -100, width: 206, height: 200 }}
      />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Đăng nhập')}
        >         
          <Text style={{ fontSize : 18 }} > 
            ĐĂNG NHẬP
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Trang chủ')}
        >
          
          <Text style={{ fontSize : 18 }} > 
          <Image
          source={{uri: 'https://i.imgur.com/PLxeGki.png',}}
          style={{ width: 21, height: 21 }}
      />
          Đăng nhập bằng Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Đăng kí')}
        >
          
          <Text style={{ fontSize : 18 }} > 
          <Image
          source={{
            uri: 'https://i.imgur.com/EtzSkpL.png',
          }  
          }
          style={{  width: 21, height: 21 }}
      />
           Đăng nhập bằng google</Text>
        </TouchableOpacity>

        <Text style={{ fontSize : 16 }}>
          Hoặc
        </Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Đăng kí')}
        >
          
          <Text style={{ fontSize : 18 }} > 
            Đăng kí tài khoản 
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
  textInput: {
    
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    backgroundColor: `#fcffff`,
    borderRadius : 5
  },
  button: {
    marginBottom: 18,
    height: 40,
    width: '70%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding :7,
    borderRadius: 10,
    marginTop: 2
    
  },
})



import React from 'react'
import { StyleSheet, Text,View, Image, TouchableOpacity, } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HocTap extends React.Component {
  state = { email: '', password: '',name: ''}
//handleSignUp = () => {
  // TODO: Firebase stuff...
  //console.log('handleSignUp')
//}
render() {
    return (
    <View style={styles.container}>
      <View>  
        <TouchableOpacity style={{marginLeft: 5}}
          onPress={() => this.props.navigation.goBack('Trang chủ')}
        >          
              <Ionicons name='arrow-back' size={30} style={{marginTop: -80, marginLeft: -135}} />
        </TouchableOpacity>
        
        <Text style={{ fontSize : 25,  textAlign: 'center', marginTop: -80 }}> Học tập</Text>
    </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Test')}>
            <Image
                source={{uri: 'https://image.flaticon.com/icons/png/128/2891/2891382.png',}}
                style={{  width: 40, height: 40,marginTop : -20  }}
            />
            <Text style={{ fontSize : 18 }} > 
                Toán
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Test')}>
            <Image
                source={{uri: 'https://image.flaticon.com/icons/png/128/2933/2933803.png',}}
                style={{  width: 40, height: 40, marginTop : -20  }}
            />
            <Text style={{ fontSize : 18 }} > 
                Lý
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Test')}>
            <Image
                source={{uri: 'https://image.flaticon.com/icons/png/128/782/782711.png',}}
                style={{  width: 40, height: 40, marginTop : -20 }}
            />
            <Text style={{ fontSize : 18 }} > 
                Hóa
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Test')}>
            <Image
                source={{uri: 'https://image.flaticon.com/icons/png/128/4459/4459205.png',}}
                style={{  width: 40, height: 40,marginTop : -20  }}
            />
            <Text style={{ fontSize : 18 }} > 
                Văn
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Test')}>
            <Image
                source={{uri: 'https://image.flaticon.com/icons/png/128/5388/5388604.png',}}
                style={{  width: 40, height: 40,marginTop : -20  }}
            />
            <Text style={{ fontSize : 18 }} > 
                Tiếng Anh
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
    marginTop : 10,
    width :200,
    height:80,
    paddingVertical: 30,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#ffffff',
  },
  button2: {
    //alignItems: 'flex-end',
    left :40,
    marginTop : 18,
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 15,
    //elevation: 3,
    backgroundColor: '#E48257',
  },
  

})
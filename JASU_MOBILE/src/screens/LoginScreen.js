import React, { Component , useEffect} from 'react'
import {  StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button, 
    } from 'react-native'
import axios from 'axios';

export default class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email   : '',
        password: ''
      }
    };

    // async postlogin() {
    //   try {
    //     const response = await fetch(
    //       'http://bb95-42-113-204-94.ngrok.io/login',
    //       {
    //         method: 'POST',
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           email: this.state.email,
    //           password: this.state.password
    //         }),
    //       }
    //     );
    //     const json = await response.json();
    //     setData(json)
    //   } catch (error) {
    //     console.error(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
  
    // componentDidMount() {
    //   this.postlogin();
    // }
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
        
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
          <TextInput
          placeholder=" Tên tài khoản"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({email: text});
          }}
        />
        <TextInput
          secureTextEntry
          placeholder=" Mật khẩu"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({password: text});
          }}
        />
        
        <TouchableOpacity
          style={styles.button}
          onPress={
            () =>  {
              axios.post('baseURL/login', {
                email: this.state.email,
                password: this.state.password
              }).then(response => {                    
                console.log(response.data);
                alert("Đăng nhập thành công");
                this.props.navigation.navigate('Trang chủ');
              }).catch(error => {
                console.log(error);
                alert("Đăng nhập không thành công")
              })
            }}  
        >    
          <Text style={{ fontSize : 18 }} > 
            Đăng nhập
          </Text>
          
        </TouchableOpacity>

        <TouchableOpacity

          onPress={() => this.props.navigation.goBack('Start')}
        >
          
          <Text style={{ fontSize : 18, marginTop: 15 }} > 
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
  textInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    backgroundColor: `#fcffff`,
    borderRadius : 10
  },
 
  button: {
    alignItems: 'center',
    marginTop : 18,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#E48257',
  },
  

})




// const login = async (data) => {
//   const LOGIN_ENDPOINT = `${SERVER_URL}/api/login.php`;

//   try {

//       let response = await axios.post(LOGIN_ENDPOINT, data);

//       if(response.status === 200 && response.data.jwt && response.data.expireAt){
//           let jwt = response.data.jwt;
//           let expire_at = response.data.expireAt;

//           localStorage.setItem("access_token", jwt);
//           localStorage.setItem("expire_at", expire_at);

//       }


//   } catch(e){
//       console.log(e);
//   }
// }



//log out

// const logout = () => {
//   localStorage.removeItem("access_token");
//   localStorage.removeItem("expire_at");
// }
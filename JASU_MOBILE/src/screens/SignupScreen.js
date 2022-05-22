import React, { Component } from 'react'
import {  StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';


import RNPickerSelect from 'react-native-picker-select';


  
  
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

export default class SignupScreen extends Component {
  state = {fullName: '' , email: '',gender: '' , password: '',  birthday: '', 
  addressDetail: '', ward: '',district: '',province: '', phoneNumber: ''}


    
render() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "fullName": "Tran Thi D",
    "email": "tranthit@gmail.com",
    "gender": "Female",
    "birthday": "1999-09-29",
    "password": "ahahaDongok99!",
    "createAddressRequest": {
      "addressDetail": "SN XX, duong XX",
      "ward": "Dich Vong Hau",
      "district": "Cau Giay",
      "province": "Ha Noi",
      "phoneNumber": "0192823482"
    }
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://14ee-2405-4803-fe2d-26c0-44d4-4800-2e39-2b2c.ngrok.io/registry", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
    return (
      <View style={styles.container}> 
        <Image
          source={{
            uri: 'https://i.imgur.com/tkMsHUW.png',
          }  
          }
          style={{ marginTop : 15, width: 206, height: 200 }}
      />
        
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <ScrollView
        style={{marginBottom: 25}}>
        <TextInput
          placeholder=" Họ và tên"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({fullName: text});
          }}
        />  
        <TextInput
          placeholder=" Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({email: text})
          }}
        />
        <TextInput
          placeholder=" Giới tính"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({gender: text})
          }}
        />
        <TextInput
          placeholder=" Ngày sinh"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({birthday: text})
          }}
        />
        <TextInput
          secureTextEntry
          placeholder=" Mật khẩu"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({password: text})
          }}
          
        />

        <TextInput
          placeholder=" Số nhà, Đường"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({addressDetail: text})
          }}
        />
        <TextInput
          placeholder=" Phường/Xã"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({ward: text})
          }}
        />
        <TextInput
          placeholder=" Quận/Huyện"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({district: text})
          }}
        />
        <TextInput
          placeholder=" Thành phố"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({province: text})
          }}
        />
        <TextInput
          placeholder=" Số điện thoại"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) =>{
            this.setState({phoneNumber: text})
          }}
        />
        
        
        </ScrollView>

                
       

        <TouchableOpacity
          style={styles.button}
          onPress={() =>  {
            axios.post('http://14ee-2405-4803-fe2d-26c0-44d4-4800-2e39-2b2c.ngrok.io/registry', {
              fullName: this.state.fullName,
              email: this.state.email,
              phoneNumber: this.state.phoneNumber,
              password: this.state.password,
              gender: this.state.gender,
              birthday: this.state.birthday,
              addressDetail: this.state.addressDetail,
              ward: this.state.ward,
              district: this.state.district,
              province: this.state.province
              

            }).then(response => {           
              console.log(response.data);
              alert("Dang ki thanh cong")
              this.props.navigation.navigate('Bạn là');
            }).catch(error => {
              console.log(error);
              alert("Dang ki khong thanh cong")
            })
          }   
          }
          
        >
          
          <Text style={{ fontSize : 18}} > 
            Tạo tài khoản
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
       
          onPress={() => this.props.navigation.goBack('Start')}
        >
          
          <Text style={{ fontSize : 18 , marginTop: 30, marginBottom: 20  }} > 
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
    width: 330,
    borderColor: 'gray',
    marginTop : 3,
    backgroundColor: `#fcffff`,
    borderRadius : 10
  },
 
  button: {
    marginBottom: -10,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#E48257',
  },
  

})



// const register = async (data) => {
//   const SIGNUP_ENDPOINT = `${SERVER_URL}/api/register.php`;
//   try {
//       let response = await axios({
//           method: 'post',
//           responseType: 'json',
//           url: SIGNUP_ENDPOINT,
//           data: data
//         });
//   } catch(e){
//       console.log(e);
//   }
// }
import React from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'



const Lopdangdoi = ({navigation}) => {
    const ClassInfo = ({ title, info}) => {
        return (
            <View  style = {styles.cardClass}>
                <Image style = {styles.cardAvata} 
                  source={{
                  uri: 'https://bitly.com.vn/acmgq0'
                  }}
                />
      
              <View>
                <Text style = {styles.cardName}> {title} </Text>
                <View style = {styles.cardIcon}>
                  <AntDesign name = 'clockcircleo' size={20} />
                  <Text style = {styles.cardText}> {info.clock} </Text>
                </View>
                <View style = {styles.cardIcon}>
                  <FontAwesome name = 'transgender' size={20} />
                  <Text style = {styles.cardText}> {info.gender} </Text>
                </View>
                <View style = {styles.cardIcon}>
                  <MaterialIcons name = 'money' size={20} />
                  <Text style = {styles.cardText}> {info.money} </Text>
                </View>
      
                <View style = {styles.cardButton}>
                  <TouchableOpacity>
                    <Text style = {styles.textButton}> {info.button} </Text>
                  </TouchableOpacity>
                </View>
      
                {info.isLike && (
                  <View style = {styles.iconLike}>
                    <Ionicons name = 'ios-heart' size = {30} color= '#FF2626' />
                  </View>
                )}
      
              </View>
          </View>
        )
      }

      

    return(
        <ScrollView>
            <View>
        <ClassInfo
          title = 'Tuyển Gia Sư Toán 8'
          info={{
            clock: 'Từ 15/7 - 30/9',
            gender: 'Gia sư Nam',
            money: 'Lương 250k/1 buổi học',
            button: 'Đã ứng tuyển',
            isLike: true,
          }}
        />

        <ClassInfo
          title = 'Tìm Gia Sư Tiếng Anh 8'
          info={{
            clock: 'Từ 19/7 - 30/10',
            gender: 'Gia sư Nam + Nữ',
            money: 'Lương 250k/1 buổi học',
            button: 'Đã ứng tuyển',
          }}
        />

        <ClassInfo
          title = 'Tìm Gia Sư Văn 10'
          info={{
            clock: 'Từ 19/7 - 30/10',
            gender: 'Gia sư Nữ',
            money: 'Lương 200k/1 buổi học',
            button: 'Đã ứng tuyển',
            isLike: true
          }}
        />
      </View>

        </ScrollView>
    );
};

export default Lopdangdoi;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',
    },
    TextInputStyle:{
        height: 45,
        width: '85%',
        backgroundColor: '#c0c0c0',
        borderRadius: 20,
        padding: 5,
        paddingLeft: 10,
        marginLeft: 10,
        marginTop: 5
      },
    filter: {
        marginLeft: 337,
        marginTop: -40
    },
    iconLike: {
        position: 'absolute',
        bottom: 12,
        right: 0
      },
    
      textButton: {
        fontWeight: 'bold',
        fontSize: 13,
        paddingLeft: 8
      },
    
      cardButton: {
        padding: 10,
        backgroundColor: '#B7FAAC',
        width: 130,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20
      },
    
      cardIcon: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingTop: 5
      },
    
      cardName: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 25
      },
    
      cardAvata: {
        height: 130,
        width: 90,
        backgroundColor: 'gray',
        borderRadius: 50,
        margin: 10
      },
    
      cardClass: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowOpacity: 0.5,
        shadowColor: '#000',
        marginTop: 30,
        margin: 20,
        borderRadius: 10
      },
    
      cardText: {
        fontSize: 13,
        paddingTop: 3,
        paddingLeft: 5,
      },
    
      searchText: {
        backgroundColor: 'white',
        flex: 1,
        margin: 10,
        paddingTop: 15,
        paddingLeft: 15,
        height:50,
        borderWidth: 1,
        borderRadius: 15
      },
    
      headerFont: {
        paddingTop: 20,
        paddingLeft: 46,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
      }
});
import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Yeuthich = () => {

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
                <Text style = {styles.textButton}> Xem thông tin </Text>
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
  
    const [filterdData,setfilterdData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search,setsearch] = useState('');
  
    const searchFilter = (text) => {
      if(text) {
        const newData = masterData.filter((item) => {
          const itemData = item.title ? item.title.toUpperCase: ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setfilterdData(newData);
        setsearch(text);
      }
      else{
        setfilterdData(masterData);
        setsearch(text);
      }
    }
  
    return (
      <ScrollView>
        <View style = {{position: 'absolute', top: 70, left: 17}}>
          <Ionicons name = 'search-outline' size={25} />
        </View>
  
        <View style = {{position: 'absolute', top: 70, left: 325}}>
         <FontAwesome name = 'filter' size = {27} />
        </View>
  
        <View>
          <ClassInfo
            title = 'Tuyển Gia Sư Toán 8'
            info={{
              clock: 'Từ 15/7 - 30/9',
              gender: 'Gia sư Nam',
              money: 'Lương 250k/1 buổi học',
              isLike: true,
            }}
          />
  
          <ClassInfo
            title = 'Tìm Gia Sư Văn 10'
            info={{
              clock: 'Từ 19/7 - 30/10',
              gender: 'Gia sư Nữ',
              money: 'Lương 200k/1 buổi học',
              isLike: true
            }}
          />
  
          <ClassInfo
            title = 'Tìm Gia Sư Văn 10'
            info={{
              clock: 'Từ 19/7 - 30/10',
              gender: 'Gia sư Nữ',
              money: 'Lương 200k/1 buổi học',
              isLike: true
            }}
          />
        </View>
      
      </ScrollView>
    )
  }
  
  export default Yeuthich
  
  const styles = StyleSheet.create ({
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
      backgroundColor: '#FED9D9',
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
  })
  
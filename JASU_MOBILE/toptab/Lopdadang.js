import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions } from 'react-native';
import { Entypo, AntDesign, SimpleLineIcons } from '@expo/vector-icons'

const W = Dimensions.get('window').width;

const ClassCreat = ({title, info}) => {
  return (
    <View>
      <View style = {styles.cardCreat}>
        <View style = {styles.cardButton1}>
          <Text style = {styles.textButton}> {info.button} </Text>
        </View>
        <Text style = {styles.headingText}> {title.nameClass} </Text>
        <Text style = {styles.bodyText}> {title.headingClass} </Text>

        <View style = {styles.cardBody}>
          <AntDesign name = 'clockcircleo' size={20} />
          <Text style = {styles.textBody}> {info.clock} </Text>
        </View>
        <View style = {styles.cardBody}>
          <SimpleLineIcons name = 'note' size={20} />
          <Text style = {styles.textBody}> {info.note} </Text>
        </View>
        <View style = {styles.cardBody}>
          <Entypo name = 'network' size={20} />
          <Text style = {styles.textBody}> {info.network} </Text>
        </View>
      </View>
        <TouchableOpacity>
          <View style = {styles.cardButton2}>
            <Text style = {styles.textButton}> {info.button2} </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style = {styles.cardButton3}>
            <Text style = {styles.textButton}> {info.button3} </Text>
          </View>
        </TouchableOpacity>

    </View>
  )
}

const Lopdadang= () => {
  return (
    <View>
      <View style = {{margin: 5}}>

      </View>
      <ScrollView>
        <ClassCreat
          title={{
            nameClass: 'Văn 12',
            headingClass: 'Lớp bổ túc và ôn luyện môn Ngữ Văn lớp 12'
          }}
          info={{
            button: 'Đã mở',
            clock: '20h30 tối Thứ 3, Thứ 5, Thứ 7',
            note: 'Nghiêm túc, chỉ bật mic khi được gọi trả lời',
            network: 'Online',
            button2: '20 người đã tham gia',
            button3: '5 đăng ký mới'
          }}
        />

        <ClassCreat
          title={{
            nameClass: 'Văn 11',
            headingClass: 'Lớp bổ túc và ôn luyện môn Ngữ Văn lớp 11'
          }}
          info={{
            button: 'Đã mở',
            clock: ' 18h30 tối Thứ 2, Thứ 4, Thứ 6',
            note: 'Nghiêm túc, tập trung trong giờ học',
            network: 'Nhà số X, ngõ X Triều Khúc, Thanh Xuân',
            button2: '10 người đã tham gia',
            button3: '3 đăng ký mới'
          }}
        />
      </ScrollView>
    </View>
  )
}

export default Lopdadang

const styles = StyleSheet.create ({
  cardButton3: {
    padding: 2,
    backgroundColor: '#FAD8D1',
    borderRadius: 20,
    width: 120,
    position: 'absolute',
    right: 25,
    bottom: 0
  },

  cardButton2: {
    padding: 2,
    backgroundColor: '#B4F5CE',
    borderRadius: 20,
    width: 170,
    marginLeft: 25
  },

  textButton: {
    padding: 2,
    paddingLeft: 10
  },

  cardButton1: {
    position: 'absolute',
    backgroundColor: '#8EF5A5',
    width: 70,
    borderRadius: 20,
    top: 7,
    right: 20
  },

  textBody: {
    paddingLeft: 5,
    paddingTop: 2,
    paddingRight: 10

  },

  cardBody: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    padding: 3,
  },

  bodyText: {
    padding: 8,
    fontSize: 15,
  },

  headingText: {
    paddingTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: W/3
  },

  cardCreat: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 20,
    borderRadius: 20,
     shadowOpacity: 0.5,
    shadowColor: '#000',
  }
})
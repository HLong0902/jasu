import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView, TextInput, Dimensions } from 'react-native';
import { Entypo, AntDesign, SimpleLineIcons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const W = Dimensions.get('window').width;

const InfoTeachClass = ({info, title}) => {
  return (
    <View style = {styles.cardBody}>
      <Text style = {styles.headingClass}> {title} </Text>

      <View style = {styles.cardIcon}>
        <AntDesign name = 'calendar' size={20} />
        <Text style = {styles.textBody}> {info.calendar} </Text>
      </View>

      <View style = {styles.cardIcon}>
        <SimpleLineIcons name = 'book-open' size={20} />
        <Text style = {styles.textBody}> {info.subject} </Text>
      </View>

      <View style = {styles.cardIcon}>
        <MaterialCommunityIcons name = 'google-classroom' size={20} />
        <Text style = {styles.textBody}> {info.class} </Text>
      </View>

      <View style = {styles.cardIcon}>
        <SimpleLineIcons name = 'people' size={20} />
        <Text style = {styles.textBody}> {info.people} </Text>
      </View>

      <View style = {styles.cardIcon}>
        <MaterialIcons name = 'money' size={20} />
        <Text style = {styles.textBody}> {info.money} </Text>
      </View>

      <View style = {styles.bodyButtom}>
        <TouchableOpacity>
          <Text style = {styles.textButtom}> Danh sách lớp </Text>
        </TouchableOpacity>
      </View>

      {info.dangday && (
          <View style = {styles.bodyButtom2}>
            <Text style = {styles.textButtom2}> Đang dạy </Text>
          </View>
          )}

      {info.dahoanthanh && (
          <View style = {styles.bodyButtom3}>
            <Text style = {styles.textButtom3}> Đã hoàn thành </Text>
          </View>       
          )}

      {info.dahoanthanh && (       
        <View style = {styles.tick}>
          <MaterialIcons name = 'file-download-done' size={30} />
        </View>
      )}
    </View>
  )
}

const Lopdanghoc = () => {
  return (
    <ScrollView>
    <View style = {{padding: 5}}>
    </View>
      <InfoTeachClass
        title = 'Toan 8'
        info = {{
          calendar: 'Ngày nhận: 19/05/2021',
          subject: 'Môn: Toán',
          class: 'Lớp: 9',
          people: 'Số học viên: 2',
          money: 'Học phí: 250k/buổi',
          dangday: true
        }}
      />

      <InfoTeachClass
        title = 'Ngữ Văn 10'
        info = {{
          calendar: 'Ngày nhận: 23/04/2021',
          subject: 'Môn: Ngữ Văn',
          class: 'Lớp: 10',
          people: 'Số học viên: 5',
          money: 'Học phí: 250k/buổi',
          dahoanthanh: true
        }}
      />
    </ScrollView>
  )
}

export default Lopdanghoc;

const styles = StyleSheet.create ({
  tick: {
    position: 'absolute',
    top: 5,
    right: 10
  },

  textButtom3: {
    fontSize: 13,
    paddingLeft: 7
  },

  textButtom2: {
    fontSize: 13,
    paddingLeft: 20
  },

  bodyButtom3: {
    padding: 2,
    backgroundColor: '#C4C4C4',
    width: 110,
    position: 'absolute',
    right: 20,
    bottom: 30,
    borderRadius: 20,
  },

  textButtom: {
    fontSize: 13,
    paddingLeft: 7
  },

  bodyButtom2: {
    padding: 2,
    backgroundColor: '#9FE8A6',
    width: 110,
    position: 'absolute',
    right: 20,
    bottom: 30,
    borderRadius: 20,
  },

  bodyButtom: {
    padding: 2,
    backgroundColor: '#9FC5E8',
    width: 110,
    position: 'absolute',
    right: 20,
    top: 70,
    borderRadius: 20,
  },

  textBody: {
    paddingLeft: 10,
    paddingBottom: 5
  },

  cardIcon: {
    flexDirection: 'row',
    paddingLeft: 20
  },

  headingClass: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: W/3
  },

  cardBody: {
    margin: 20,
    backgroundColor: '#fff',
    shadowOpacity: 0.5,
  }
})
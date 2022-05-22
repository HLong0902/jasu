import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';


import {FontAwesome5, AntDesign} from '@expo/vector-icons';



export default class HomeScreen extends React.Component {
  state = { type: '', subject: ''}
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }
  
  render() {
    const {navigation} = this.props;
    const { data, isLoading } = this.state;

    const getClass = async () => {
    try {
      const response = await fetch(
        'http://14ee-2405-4803-fe2d-26c0-44d4-4800-2e39-2b2c.ngrok.io/student/create_class',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiaWF0IjoxNjMzMzE0NDE2LCJleHAiOjE2MzMzMjUyMTZ9.qHYQdIBukuXCdyWJVXVRvrsqkgWpplM1pPX14Dak-sd04h-qZ0pcFqS3-Oq5M8qSfJ2wOnH6TKEQ8HATQRnANg'
          },
        }
      );
      const json = await response.json();
      this.setState({ data: json });
      console.log(json)
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };


    return (
      <ScrollView style={styles.container}>
        <View style={styles.categoryContainer}>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => this.props.navigation.navigate('Tìm lớp') }>
            <View style={styles.categoryIcon1}>
            <AntDesign name= "search1" size={30} color="#000000" />
            </View>
  
            <Text style={styles.categoryBtnTxt}>Tìm lớp</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => this.props.navigation.navigate('Học tập')
            }>
            <View style={styles.categoryIcon2}>
            <AntDesign name= "book" size={30} color="#000000" />
            </View>
            <Text style={styles.categoryBtnTxt}>Học tập</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.categoryBtn} 
          onPress={() => this.props.navigation.navigate('Danh sách gia sư')} >
            <View style={styles.categoryIcon3}>
              <FontAwesome5 name="clipboard-list" size={30} color="#000000"/>
            </View>
            <Text style={styles.categoryBtnTxt}>Gia sư</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.cardsWrapper}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#333',
            }}>
              Danh sách lớp đề xuất
          </Text>
          
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
          </View>

            <View style={styles.cardInfo}>  
              <Text style={styles.cardTitle}>
                {data.subject}
              </Text>

              <Text style={styles.cardDetails}>
                {"Có thể nhận lớp"}
              </Text>

              <Text style={styles.cardDetails}>
                {data.type}
              </Text>

              <Text style={styles.cardDetails}>
                {data.fee}
              </Text>  

              </View>
            </View>
        </View>
      </ScrollView>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',

  },
 
  categoryIcon1: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#CE7559' ,
    borderRadius: 50,  
  },
  categoryIcon2: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#E7F688' ,
    borderRadius: 50,  
  },
  categoryIcon3: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#CD89CE' ,
    borderRadius: 50,  
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#000000',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardInfo: {
    flex: 95,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: 'green',
  },
})
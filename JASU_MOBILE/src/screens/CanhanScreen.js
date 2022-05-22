import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
  ScrollView
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Rating = ({ rating }) => {
  return (
    <View style={styles.rating}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          if (rating > i) {
            return (
              <FontAwesome
                name="star"
                color="#FFC947"
                style={{ marginRight: 3 }}
              />
            );
          }
          return <FontAwesome name="star-o" style={{ marginRight: 3 }} />;
        })}
    </View>
  );
};

const CanhanScreen = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [school, setSchool] = useState([]);
  const [addr, setAddr] = useState([]);

  const getInfo = async () => {
    try {
      const response = await fetch(
        'http://94db-27-72-144-189.ngrok.io/tutor/4',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cmFudGhpYkBnbWFpbC5jb20iLCJpYXQiOjE2MzI3OTYxNDIsImV4cCI6MTYzMjgwNjk0Mn0.6Pxtg3Ou6MN_tJL-dDZQt74C_vtyBS8tzuDkkd2isR91kQJLXcoSd-sEAexEI4RUaVdbZi4O7Ab0wmvCShI7JA'
          },
        }
      );
      const json = await response.json();
      console.log(json)
      setSchool(json.listSchool[0])
      setData(json.userDetailDto)
      setAddr(json.userDetailDto.addressDto)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInfo(data);
  }, []);


    return (
      <ScrollView>
      <View style={styles.container}>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Chỉnh sửa thông tin')}
        >
          <View style={{ position: 'absolute', left: 310, top: 30 }}>
            <FontAwesome name="gears" size={35} />
          </View>
        </TouchableOpacity>

        <View style={styles.headerContainer}>
          <Text style={styles.heading}> {'Chào' + ' ' + data.fullName} </Text>
          <Text style={styles.desc}> Học Tốt Cùng JASU Nhé! </Text>
        </View>

        <View style={styles.profileContainer}>
          <Image
            style={styles.cardAvata}
            source={data.avata}
          />
          <View style={styles.cardLeft}>
            <Text style={styles.profileName}> {data.fullName} </Text>
            <TouchableOpacity>
              <Text style={styles.profileLane}>
                {' '}
                Học Sinh | Đăng nhập: 3 ngày{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Rating
               rating= {4}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.cardHeading}> Thông Tin Của Tôi </Text>
        </View>

        <View>
          <View style = {styles.cardMix}>
            <View style = {styles.cardBody}>
              <FontAwesome name = 'mortar-board' size={25} />
              <Text style = {styles.cardText}> {school.schoolName} </Text>
            </View>

            <View style = {styles.cardBody}>
              <FontAwesome name = 'compass' size={25} />
              <Text style = {styles.cardText}> {addr.addressDetail} </Text>
            </View>

            <View style = {styles.cardBody}>
              <FontAwesome name = 'intersex' size={25} />
              <Text style = {styles.cardText}> {data.gender} </Text>
            </View>

            <View style = {styles.cardBody}>
              <FontAwesome name = 'birthday-cake' size={25} />
              <Text style = {styles.cardText}> {data.birthday} </Text>
            </View>

            <TouchableOpacity>
              <View style = {styles.cardBody}>
                <FontAwesome name = 'share-square-o' size={25} />
                <Text style = {styles.cardText}> Giới thiệu bạn bè </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#F0EBCC',
              margin: 10,
              flexDirection: 'row',
              padding: 30,
            }}>
            <View style={{ position: 'absolute', left: 23, top: 8 }}>
              <FontAwesome name="edit" size={45} />
            </View>
            <Text
              style={{ fontSize: 18, position: 'absolute', left: 80, top: 20 }}>
              Đăng Ký Làm Gia Sư
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.cardButton}>
            <Text style={styles.cardButtontext}> Đăng Xuất </Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }



const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    position: 'absolute',
    top: 65,
    left: 140,
  },

  cardButtontext: {
    fontSize: 16,
    marginLeft: 18,
  },

  cardButton: {
    backgroundColor: '#B6C9F0',
    marginHorizontal: 120,
    padding: 5,
    borderRadius: 10,
    marginTop: 15,
  },

  cardMix: {
    backgroundColor: '#fff',
    margin: 10,
  },

  cardText: {
    fontSize: 16,
    paddingLeft: 15,
  },

  cardBody: {
    margin: 5,
    flexDirection: 'row',
    paddingLeft: 20,
  },

  cardAvata: {
    height: 80,
    width: 80,
    backgroundColor: 'gray',
    borderRadius: 80,
  },

  cardLeft: {
    paddingHorizontal: 10,
  },

  cardHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  },

  profileLane: {
    position: 'absolute',
    left: 10,
    top: 40,
    color: 'gray',
  },

  profileContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    margin: 15,
    borderRadius: 15,
  },

  profileName: {
    position: 'absolute',
    left: 10,
    top: 5,
    fontSize: 17,
    margin: 10,
  },

  container: {
    flex: 1,
  },

  headerContainer: {
    padding: 20,
    paddingHorizontal: 30,
    marginTop: 42,
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },

  desc: {
    fontSize: 17,
    color: '#000000',
    marginTop: 5,
  },
});
 
export default CanhanScreen;
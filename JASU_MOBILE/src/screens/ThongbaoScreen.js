import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Lớp học đã được nhận',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Bạn vừa tạo lớp học',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Đăng kí dạy thành công',
    },


  ];
  
const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name='trash-bin' size={30} style={{marginLeft: 260, marginTop: -30}} />
    </View>
);

const ThongbaoScreen = ({navigation}) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    
      return (
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={{fontSize: 16,marginTop: 10 }}>Gần đây</Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
};

export default ThongbaoScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#CCCCcc',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 16,
      marginTop: 0
    },
  });

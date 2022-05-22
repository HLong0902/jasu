import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class DsGiaSu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      
      <View style={{ flex: 1, padding: 24 }}>
        <View>  
        <TouchableOpacity style={{marginLeft: -5}}
          onPress={() => this.props.navigation.goBack('Trang chủ')}
        >          
              <Ionicons name='arrow-back' size={30} />
        </TouchableOpacity>
        
        <Text style={{ fontSize : 25,  textAlign: 'center', marginTop: -31 }}> Danh sách gia sư</Text>
    </View>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            style={{marginTop: 10}}
            data={data}
            keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text><Image
          source={{uri: item.url,}}
          style={{  width: 25, height: 25 }}
      /> {item.title}
              </Text>
              
            )}
            
          />
        )}
      </View>
    );
  }
};
import React, { Component } from "react";
import { StyleSheet, Text,View,SafeAreaView,ScrollView,TouchableOpacity ,Button} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';
const Separator = () => (
  <View style={styles.separator} />
);



class TimLop extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.state = { isLoading: true, search: '' };
  }
  // componentDidMount() {
  //   return fetch('http://localhost:8080/tutor/list_class_signup/3')
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       this.setState(
  //         {
  //           isLoading: false,
  //           dataSource: responseJson,
  //         },
  //         function() {
  //           this.arrayholder = responseJson;
  //         }
  //       );
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  // search = text => {
  //   console.log(text);
  // };
  // clear = () => {
  //   this.search.clear();
  // };

  // SearchFilterFunction(text) {
  //   //passing the inserted text in textinput
  //   const newData = this.arrayholder.filter(function(item) {
  //     //applying filter for the inserted text in search bar
  //     const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
  //     const textData = text.toUpperCase();
  //     return itemData.indexOf(textData) > -1;
  //   });

  //   this.setState({
  //     //setting the filtered newData on datasource
  //     //After setting the data it will automatically re-render the view
  //     dataSource: newData,
  //     search: text,
  //   });
  // }

  // ListViewItemSeparator = () => {
  //   //Item sparator view
  //   return (
  //     <View
  //       style={{
  //         height: 0.3,
  //         width: '90%',
  //         backgroundColor: '#080808',
  //       }}
  //     />
  //   );
  // };
  
  render() {
    return (
    
    <SafeAreaView style={styles.container}>
      
    <View>  
      <TouchableOpacity style={{marginLeft: 15}}
        onPress={() => this.props.navigation.goBack('Trang ch???')}
      >     
      <Ionicons name='arrow-back' size={30} />
      <SearchBar
          round
          searchIcon={{ size: 30 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="T??m ki???m"
          style={{marginLeft: 15}}
      />     

      </TouchableOpacity>
      
    </View>

    <ScrollView horizontal={true}>
      
      <View style = {styles.view1}>
          <Text style={{ fontSize : 14, height : 32 , textAlign: 'center',}} > 
            To??n 8
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          ???? Th???: 2,4,6
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          ???? N???
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          L????ng 180k/bu???i
          </Text>
          <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate('Test')}
          >
          <Text style={{ fontSize : 14 }} > 
            Xem chi ti???t
          </Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.view1}>
          <Text style={{ fontSize : 14, height : 32 , textAlign: 'center',}} > 
            Ti???ng Anh 8
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          ???? Th???: 3,5,7
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          ???? Nam
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          L????ng 180k/bu???i
          </Text>
          <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate('????ng k?? cho h???c sinh')}
          >
          <Text style={{ fontSize : 14 }} > 
            Xem chi ti???t
          </Text>
        </TouchableOpacity>
      </View> 
        <View style = {styles.view1}>
          <Text style={{ fontSize : 14 , height : 32, textAlign: 'center',}} > 
            H??a 8
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          ???? Th???: 3,5,7
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          ???? Nam
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          L????ng 170k/bu???i
          </Text>
          <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate('????ng k?? cho h???c sinh')}
          >
          <Text style={{ fontSize : 14 }} > 
            Xem chi ti???t
          </Text>
        </TouchableOpacity>
        </View>
         <View style = {styles.view1}>
          <Text style={{ fontSize : 14, height : 32, textAlign: 'center', }} > 
            L?? 8
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          ???? Th???: 3,5,7
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          ???? Nam
          </Text>
          <Separator />
          <Text style={{ fontSize : 14 }} > 
          L????ng 160k/bu???i
          </Text>
          <TouchableOpacity
          style={styles.button2}
          onPress={() => this.props.navigation.navigate('????ng k?? cho h???c sinh')}
          >
          <Text style={{ fontSize : 14 }} > 
            Xem chi ti???t
          </Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    <Separator />


    <Text style={{ fontSize : 25, textAlign: 'center' }}>  C??c L???p ??ang T??m</Text>

    <ScrollView >
      <View style = {styles.view2}>
          <Text style={{ fontSize : 18,left :50}} > 
            T??m gia s?? to??n 8
          </Text>
          <Text style={{ fontSize : 14 }} > 
            Th???i gian 19h t???i th??? 2,5
          </Text>
          <Text style={{ fontSize : 14 }} > 
            H??nh th???c online
          </Text>
          <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Test')}
          >
          <Text style={{ fontSize : 14}} > 
            Xem chi ti???t
          </Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.view2}>
          <Text style={{ fontSize : 18,left :50 }} > 
            T??m gia s?? ti???ng anh 8
          </Text>
          <Text style={{ fontSize : 14 }} > 
            Th???i gian 19h t???i th??? 2,5
          </Text>
          <Text style={{ fontSize : 14 }} > 
            H??nh th???c online
          </Text>
          <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Test')}
          >
          <Text style={{ fontSize : 14 }} > 
            Xem chi ti???t
          </Text>
        </TouchableOpacity>
        </View> 
        <View style = {styles.view2}>
          <Text style={{ fontSize : 18,left :50 }} > 
            T??m gia s?? V???t L?? 8
          </Text>
          <Text style={{ fontSize : 14 }} > 
            Th???i gian 19h t???i th??? 3,6
          </Text>
          <Text style={{ fontSize : 14 }} > 
            H??nh th???c online
          </Text>
          <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Test')}
          >
          <Text style={{ fontSize : 14 }} > 
            Xem chi ti???t
          </Text>
        </TouchableOpacity>
        </View> 
        <View style = {styles.view2}>
          <Text style={{ fontSize : 18,left :50 }} > 
            T??m gia s?? H??a 8
          </Text>
          <Text style={{ fontSize : 14 }} > 
            Th???i gian 19h t???i th??? 4,7
          </Text>
          <Text style={{ fontSize : 14 }} > 
            H??nh th???c online
          </Text>
          <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Test')}
          >
          <Text style={{ fontSize : 14 }} > 
            Xem chi ti???t
          </Text>
        </TouchableOpacity>
        </View> 
        
      </ScrollView>
  </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    //marginHorizontal: 16,
    backgroundColor: '#faffff',
    
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    //alignItems: 'flex-end',
    alignItems: 'center',
    left:200,
    marginTop : 18,
    width : 100,
    height: 20,
    //paddingVertical: 1,
    //paddingHorizontal: 2,
    borderRadius: 15,
    //elevation: 3,
    backgroundColor: '#ABE8F5',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view1 :{
    marginTop: 25,
    backgroundColor: '#eeeeee',
    width :120,
    height: 285,
    marginLeft :10,
    borderRadius : 15,
    elevation: 20,
    left : 10
  },
  view2 :{
    backgroundColor: '#eeeeee',
    width : 360,
    height: 120,
    marginTop : 10,
    borderRadius : 15,
    elevation: 20,
    left : 20,
  },
  button2: {
    //alignItems: 'flex-end',
    alignItems: 'center',
    left:10,
    marginTop : 18,
    width : 100,
    height: 20,
    //paddingVertical: 1,
    //paddingHorizontal: 2,
    borderRadius: 15,
    //elevation: 3,
    backgroundColor: '#FED9D9',
    marginLeft: 0
  },
});

export default TimLop;
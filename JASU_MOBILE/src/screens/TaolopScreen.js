import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'
const Separator = () => (
    <View style={styles.separator} />
  );

export default TaolopScreen = () => {
  const [user, setUser] = useState({
    userCreateId: '',
    maxNum: '',
    subject: '',
    grade: '',
    price: '',
    type: '',
    numLesson: '',
    schedule: '',
    beginDay: '',
    endDay: '',
  });

  const [loading, setLoading] = useState(false);

  const onChangeUserCreateId = (value) => {
    setUser({ ...user, name: value });
  };

  const onChangeMaxNum = (value) => {
    setUser({ ...user, gender: value });
  };

  const onChangeSubject = (value) => {
    setUser({ ...user, email: value });
  };

  const onChangeGrade = (value) => {
    setUser({ ...user, status: value });
  };
  const onChangePrice = (value) => {
    setUser({ ...user, gender: value });
  };

  const onChangeType = (value) => {
    setUser({ ...user, email: value });
  };

  const onChangeNumLesson = (value) => {
    setUser({ ...user, status: value });
  };  
  const onChangeSchedule = (value) => {
    setUser({ ...user, gender: value });
  };

  const onChangeBeginDay = (value) => {
    setUser({ ...user, email: value });
  };

  const onChangeEndDay = (value) => {
    setUser({ ...user, status: value });
  };

    const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer '
    );

    myHeaders.append('Content-Type', 'application/json');

    fetch('http://4b78-2405-4803-fe31-8030-7c7e-a362-b04a-74c5.ngrok.io/create_class', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        userCreateId: user.userCreateId,
        maxNum: user.maxNum,
        subject: user.subject,
        grade: user.grade,
        price: user.price,
        type: user.type,
        numLesson: user.numLesson,
        schedule: user.schedule,
        beginDay: user.beginDay,
        endDay: user.endDay,
      }),
    })
      .then((response) => {
        setLoading(false)
        response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };



        return (
            <View style={styles.container}>
              <TextInput
                onChangeText={(value) => onChangeSubject}
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="📚Môn học"
              />
              <View style={styles.fixToText}>
                <TextInput
                  onChangeText={(value) => onChangeGrade}
                  style={styles.textInput2}
                  autoCapitalize="none"
                  placeholder="🧑‍🏫Lớp"
                />
              
                <TextInput
                 style={styles.textInput2}
                 autoCapitalize="none"
                  placeholder="⏰Thời gian"
                />
              </View>
              
              <View style={styles.fixToText}>
              <TextInput
                placeholder="👦 Nam/Nữ"
                autoCapitalize="none"
                style={styles.textInput2}
              />
              
              <TextInput 
                onChangeText = {(value) => onChangeMaxNum}
                style={styles.textInput2}
                autoCapitalize="none"
                placeholder="😊Số lượng"
              />
              </View>
              
              
              <View style={styles.fixToText}> 
              <Text style={{ fontSize : 16, color : 'gray', marginTop: 10, marginLeft: -40 }}>Hình thức :     </Text>
              <TouchableOpacity
                style={styles.button3}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                <Text style={{ fontSize : 16, marginTop: -1.5 }} > 
                  Online
                </Text>
              </TouchableOpacity>  
              <TouchableOpacity
                style={styles.button4}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                <Text style={{ fontSize : 16, marginTop: -1.5}} > 
                  Offline
                </Text>
              </TouchableOpacity> 
              </View> 
              <TextInput 
                style={styles.textInput}
                placeholder="💵Học phí"
              />
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="📝Lưu ý"
                />
                <Separator />
              <View style={styles.fixToText}> 
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Lớp đã tạo')}
              >
                <Text style={{ fontSize : 18 }} > 
                  Tạo lớp
                </Text>
              </TouchableOpacity>  
              <TouchableOpacity
                style={styles.button2}
                onPress={() => this.props.navigation.goBack('Trang chủ')}
              >
                <Text style={{ fontSize : 18 }} > 
                  Hủy
                </Text>
              </TouchableOpacity> 
              </View>  
            </View>
            
          )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `#ffffff`
  },
  
  textInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    backgroundColor : '#fcffff',
    borderRadius : 10
  },
  textInput2: {
    height: 40,
    width: '40%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    backgroundColor : '#fcffff',
    borderRadius : 10
  },
  button: {
    marginTop: 1,
    height: 40,
    
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#B4F2F6',
    padding :7,
    borderRadius: 10,
  },
  button2: {
    marginTop: 1,
    height: 40,
    left: 20,
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#F6C8B4',
    padding :7,
    borderRadius: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button3: {
    marginTop: 5,
    height: 30, 
    width: '25%',
    alignItems: 'center',
    backgroundColor: '#B4F2F6',
    padding :7,
    borderRadius: 15,
    marginLeft: 0

  },
  button4: {
    marginTop: 5,
    height: 30,
    left: 20,
    width: '25%',
    alignItems: 'center',
    backgroundColor: '#F6C8B4',
    padding :7,
    borderRadius: 15,
  },
})
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabs from './navigation/tabs';

//import stack screens
import Start from './src/screens/Start';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import PickRole from './src/screens/PickRole';

import Timlop from './src/screens/Timlop';
import HocTap from './src/screens/HocTap';
import DsGiaSu from './src/screens/DsGiaSu';
import { createStackNavigator } from '@react-navigation/stack';
import Chinhsuathongtin from './src/screens/Chinhsuathongtin';



const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome to JASU" component={Start} />
        <Stack.Screen name="Đăng kí" component={SignupScreen} />   
        <Stack.Screen name="Đăng nhập" component={LoginScreen} />          
        <Stack.Screen name="Trang chủ" component={Tabs} />
        <Stack.Screen name="Bạn là" component={PickRole} /> 
        <Stack.Screen name="Tìm lớp" component={Timlop} /> 
        <Stack.Screen name="Học tập" component={HocTap} /> 
        <Stack.Screen name="Danh sách gia sư" component={DsGiaSu} /> 
        <Stack.Screen name="Chỉnh sửa thông tin" component={Chinhsuathongtin} /> 
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}



export default App
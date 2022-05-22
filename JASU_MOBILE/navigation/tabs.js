import React from 'react';


import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import HomeScreen from '../src/screens/HomeScreen';
import CanhanScreen from "../src/screens/CanhanScreen";
import LophocScreen from "../src/screens/LophocScreen"; 
import TaolopScreen from "../src/screens/TaolopScreen";
import ThongbaoScreen from "../src/screens/ThongbaoScreen";

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';



const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component ={HomeScreen} 
            options={{
                tabBarLabel: 'Trang chủ',
                tabBarIcon: () => <AntDesign name='home' size={30} />
            }}
            />
            <Tab.Screen name = "Lớp học" component ={LophocScreen} 
            options={{
                tabBarLabel: 'Lớp học',
                tabBarIcon: () => <SimpleLineIcons name='notebook' size={30} />
            }} 
            />
            <Tab.Screen name = "Tạo lớp" component ={TaolopScreen}
            options={{
                tabBarLabel: 'Tạo lớp',
                tabBarIcon: () => <AntDesign name='pluscircle' size={35} />
            }} 
            />
            <Tab.Screen name = "Thông báo" component ={ThongbaoScreen}
            options={{
                tabBarLabel: 'Thông báo',
                tabBarIcon: () => <Ionicons name='notifications-outline' size={30} />
            }} 
            />
            <Tab.Screen name = "Cá nhân" component ={CanhanScreen}
            options={{
                tabBarLabel: 'Cá nhân',
                tabBarIcon: () => <Ionicons name='person-outline' size={30} />
            }} />
        </Tab.Navigator>
      
    );
}

export default Tabs;

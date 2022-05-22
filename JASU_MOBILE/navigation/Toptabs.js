import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Lopdangdoi from '../toptab/Lopdangdoi'
import Yeuthich from '../toptab/Yeuthich'
import Lopdanghoc from '../toptab/Lopdanghoc'
import Lopdadang from '../toptab/Lopdadang'

const Tab = createMaterialTopTabNavigator();

const Toptabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen component={Lopdangdoi} name ='Lớp đang đợi'/>
            <Tab.Screen component={Lopdanghoc} name ='Lớp đã tạo'/>
            <Tab.Screen component={Yeuthich} name ='Lớp đã mời'/>
            <Tab.Screen component={Lopdadang} name ='Lớp đang dạy'/>
        </Tab.Navigator>
    )
    
}

export default Toptabs;
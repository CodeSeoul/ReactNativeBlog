'use strict';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinkingConf from './linkingConf';
import {Home} from '../components/Home';

export default function Navigation() {
    return (
        <NavigationContainer linking={LinkingConf}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName="">
            <Stack.Screen
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    )
}
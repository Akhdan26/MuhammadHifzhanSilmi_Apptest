import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ContactList from './screen/ContactList';
import AddContact from './screen/AddContact';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntIcon from 'react-native-vector-icons/AntDesign';

import { Provider } from 'react-redux';
import { Store } from './redux/store';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              if (route.name === 'Contact List') {
                iconName = 'contacts';
                size = focused ? 25 : 20;
                color = focused ? '#EB1D36' : '#555';
              } else if (route.name === 'Add Contact') {
                iconName = 'adduser';
                size = focused ? 25 : 20;
                color = focused ? '#EB1D36' : '#555';
              }
              return (
                <AntIcon
                  name={iconName}
                  size={size}
                  color={color}
                />
              )
            }
          })}
          tabBarOptions={{
            labelStyle: {
              fontWeight: 'bold',
              fontSize: 12
            }
          }}
        >
          <Tab.Screen
            name='Contact List'
            component={ContactList}
            options={{ tabBarBadge: 3 }} 
          />
          <Tab.Screen
            name='Add Contact'
            component={AddContact}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;

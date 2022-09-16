import React from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
    View,
  FlatList
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import { useSelector, useDispatch } from 'react-redux';
import { setFirstName, setLastName, setAge, setPhoto, getContacts } from '../redux/actions';

export default function ListContactScreen({ navigation, route }) {
  
    const { firstName, lastName, age, photo, contacts } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        // getData();
        dispatch(getContacts());
    }, []);

    return (
        <SafeAreaView>
            <FlatList
                data={contacts}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.firstName}</Text>
                        <Text style={styles.text}>{item.lastName}</Text>
                        <Text style={styles.text}>{item.age}</Text>
                        <Text style={styles.text}>{item.photo}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contact: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 10,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    },
  item: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5,
        margin: 7,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

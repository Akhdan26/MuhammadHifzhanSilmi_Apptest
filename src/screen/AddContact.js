import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function AddContactScreen({ navigation }) {

//   const onPressHandler = () => {
//     navigation.navigate('Contact List');
//   }

    return (
        <SafeAreaView style={styles.btnTitle}>
            <View>
                {/* <Pressable
                    onPress={onPressHandler}
                    style={({pressed}) => ({ backgroundColor: pressed ? '#ddd' : '#00ff'})}
                >
                    <Text style={styles.text}>
                    ini list contact
                    </Text>
                </Pressable> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  btnTitle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  }
})

import React from 'react';
import { StyleSheet, View,Text, TextInput, TouchableHighlight} from 'react-native';

class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
         メンバー登録
        </Text>

        <TextInput style={styles.input} value='E-mail Address' />
        <TextInput style={styles.input} value='Password' />
        <TouchableHighlight style={styles.button} title='送信' onPress={() => {}} underlayColor='#C70F66'>
          <Text style={styles.buttonTitle}>送信する</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '140%',
    padding: 100,
    backgroundColor: '#fff',

  },
input:{
  backgroundColor: '#eee',
  height: 48,
  marginBottom: 16,
  borderWidth: 1,
  borderColor: '#DDD',
  padding: 15,
},
title:{
  fontSize: 28,
  alignSelf: 'center',
  marginBottom: 30,
},
button :{
  backgroundColor: '#E31676',
  height: 40,
  borderRadius: 4,
  justifyContent: 'center',
  alignItems: 'center',
  width: '65%',
  alignSelf:'center',
},
buttonTitle :{
  color:'#fff',
  fontSize:18,


},
});

export default SignupScreen;

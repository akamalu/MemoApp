import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


class CircleButton extends React.Component{
  render(){
    return (
      <View style={styles.CircleButton}>
      <Text style={styles.CircleButtonTitle}>
       {this.props.children}
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CircleButton:{
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent:'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,

  },
  CircleButtonTitle: {
    fontSize:28,
    lineHeight: 28,
    color: '#fff',
  },

});

export default CircleButton;

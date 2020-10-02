import React from 'react';
import {StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
},  'FontAwsome');

class CircleButton extends React.Component{
  state = {
    fontLoaded: false,
  }

  async componentDidMount(){
    await Font.loadAsync({
          FontAwsome: fontAwsome,
    });

    this.setState({ fontLoaded: true});
  }

  render(){
    const {name, style, color }= this.props;

    let bgColor ='#E31676';
    let textColor ='#fff';

    if (color === 'white'){
        bgColor ='#fff';
        textColor = '#E31676';

    }

    return (
      <View style={[styles.CircleButton, style,{ backgroundColor: bgColor }]}>
      {
        this.state.fontLoaded ?(
          <CustomIcon name={name} style={[styles.CircleButtonTitle,{ color :textColor }]}/>
        ) : null
      }
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

    borderRadius: 24,
    justifyContent:'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,

  },
  CircleButtonTitle: {
    fontFamily: 'FontAwsome',
    fontSize:24,
    lineHeight: 28,
  },

});

export default CircleButton;

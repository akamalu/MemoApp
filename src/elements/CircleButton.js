import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as Font from 'expo-font';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

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
    const {style, color }= this.props;

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
          <Text style={[styles.CircleButtonTitle,{ color :textColor }]}>
           {this.props.children}
          </Text>
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
    fontSize:28,
    lineHeight: 28,
  },

});

export default CircleButton;

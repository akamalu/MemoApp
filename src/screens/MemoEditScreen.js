import React from 'react';
import{StyleSheet, View, Text, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput} multiline value="Hi" />

        <CircleButton name='check' />

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    paddingTop: 90,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 20,
  },
});

export default MemoEditScreen;
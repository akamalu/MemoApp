import React from 'react';
import{StyleSheet, View, Text, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  handlePress(){
    const { params } = this.props.navigation.state;
    const db = firebase.firestore();
    db.collection(`users/${ params.currentUser.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    })
    .then((docRef) => {
      console.log(docRef.id);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline value={this.state.body}
          onChangeText={(text) => {this.setState({body: text}); }}
          />

        <CircleButton name='check' onPress={this.handlePress.bind(this)}/>

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
    paddingTop: 30,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 20,
  },
});

export default MemoCreateScreen;

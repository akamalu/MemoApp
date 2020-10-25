import React from 'react';
import{StyleSheet, View, Text, TextInput } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component{
  state = {
    body: '',
    key: '',
  }

componentDidMount(){
  const { params } = this.props.navigation.state;
  this.setState({
    body: params.memo.body,
    key: params.memo.key,
   });
}

 handlePress(){
   const {currentUser} = firebase.auth();
   const newDate = firebase.firestore.Timestamp.now();
   const db = firebase.firestore();
   db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
     .update({
        body:this.state.body,
        createdOn: newDate,
   })
   .then(() => {
     const{navigation} = this.props;
     navigation.state.params.returnMemo({
       body: this.state.body,
       key: this.state.key,
       createdOn: newDate,
     });
     navigation.goBack();
   })
   .catch((error) => {
     console.log(error);
   });
 }




    render () {
        if (this.state.body == null) { return null; }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline value={this.state.body}
          onChangeText={(text) => { this.setState({body: text }); }}
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
    backgroundColor: '#fff',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 15,
    lineHeight:22,
  },
});

export default MemoEditScreen;

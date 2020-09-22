import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render(){
   return (
    <View style={styles.container}>

    <View style={styles.appbar}>
      <View>
      <Text style={styles.appbarTitle}>MEMOT</Text>
      </View>
    </View>

    <View style={styles.memoList}>
     <View style={styles.memoListItem}>
      <Text style={styles.memoTitle}>講座のアイテム</Text>
      <Text style={styles.memoDate}>2020/9/21</Text>
      </View>



      <View style={styles.memoListItem}>
       <Text style={styles.memoTitle}>講座のアイテム</Text>
       <Text style={styles.memoDate}>2020/9/21</Text>
       </View>



       <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>講座のアイテム</Text>
        <Text style={styles.memoDate}>2020/9/21</Text>
       </View>


        <View style={styles.memoListItem}>
         <Text style={styles.memoTitle}>講座のアイテム</Text>
         <Text style={styles.memoDate}>2020/9/21</Text>
         </View>



         <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2020/9/21</Text>
          </View>
         </View>

      <View style={styles.memoAddButton}>
      <Text style={styles.memoAddButtonTitle}>+</Text>
      </View>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  memoAddButton:{
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
    shadowOpacity: 0.4,
    shadowRadius: 3,

  },
  memoAddButtonTitle: {
    fontSize:28,
    lineHeight: 28,
    color: '#fff',
  },
  memoList: {
    width: '100%',
    flex: 1,
    paddingTop: 60,
  },
  memoListItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 19,
    marginBottom: 3,
  },
  memoDate: {
    fontSize: 13,
    color: '#a2a2a2',
  },
　appbar:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    paddingTop: 9,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    zIndex: 10,
},
appbarTitle: {
  color: '#fff',
  fontSize: 17,
},
});

import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

class MemoList extends React.Component {
  render(){
    return(
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

   );
  }
}

const styles = StyleSheet.create({
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
});

export default MemoList;

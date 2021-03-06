import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';


import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

// eslint-disable-next-line
require("firebase/firestore");

import ENV from './env.json';

const firebaseconfig = {
 apiKey:                ENV.FIREBASE_API_KEY,
 authDomain:            ENV.FIREBASE_AUTH_DOMAIN,
 databaseURL:           ENV.FIREBASE_DB_URL,
 projectId:             ENV.FIREBASE_PRJ_ID,
 storageBucket:         ENV.FIREBASE_STORAGE,
 messagingSenderId:     ENV.FIREBASE_SENDER_ID,
 appId:                 ENV.FIREBASE_APP_ID,
 measurementId:         ENV.FIREBASE_MESUREMENT_ID,
};
firebase.initializeApp(firebaseconfig);

const App = createStackNavigator({

  Login:      {screen: LoginScreen},
  Signup:     {screen: SignupScreen},
  Home:       {screen: MemoListScreen},
  MemoDetail: {screen: MemoDetailScreen},
  MemoEdit:   {screen: MemoEditScreen},
  MemoCreate: {screen: MemoCreateScreen},

}, {
  defaultNavigationOptions: {
    headerTitle: 'Memooo',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
      backgroundColor: '#265366',
      },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default createAppContainer(App);

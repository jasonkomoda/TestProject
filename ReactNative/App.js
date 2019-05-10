import React, { Component } from 'react';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './reducer';
import RepoList from './RepoList';
import LoginScreen from './src/screens/LoginScreen';
import SignUp from './src/screens/SignUp';
import HomeScreen from './src/screens/HomeScreen';
import { createStackNavigator, createAppContainer } from "react-navigation";

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  }
},
{
  initialRouteName: "Login"
}
);

const App = createAppContainer(MainNavigator);
export default App;

// export default class App extends Component {
//   render() {
//     // return (
//     //   <Provider store={store}>
//     //     <View style={styles.container}>
//     //       <RepoList />
//     //     </View>
//     //   </Provider>
//     // );
//     return (
//       <View style={styles.container}>
//         <VideoPlayer source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}   // Can be a URL or a localfile.
//           navigator={ this.props.navigator }
//           style={styles.backgroundVideo}
//         />
//       </View>
//     );
//   }
// }

var styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     marginTop: 50
//   }
// });
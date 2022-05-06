import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { Platform, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import Header from './components/header';
import InputBar from './components/inputbar';
import LogItem from './components/logitem';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

const Stack = createNativeStackNavigator();

//creates the App class
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      logbookInput: '', //Input to the logbook
      logbook: [  //An array of log objects
        {
          id: 0,
          date: '',
          entry: 'Have an apple',
          supervisorApproval: false
        }

      ] //entryObjects

    }
  }
  //add log to the logbook array
  addNewLog() {
    let logbook = this.state.logbook;
    if (this.state.logbookInput) {
      logbook.unshift({
        id: logbook.length + 1,
        date: '',
        entry: this.state.logbookInput,
        supervisorApproval: false
      })
    }

    this.setState({
      logbook: logbook,
      logbookInput: ''
    });
  }

  removeLog(item) {
    let logbook = this.state.logbook;

    logbook = logbook.filter((lb) => lb.id !== item.id);

    this.setState({ logbook });
  }


  //renders the components to screen
  render() { //renders components to the screen
    const statusbar = (Platform.OS === 'ios') ? <View styles={styles.statusbar}></View> : <View></View>;

    //{statusbar} makes a status bar based on if the platform is ios else it doesn't
    //<Header> pulls the Header component from the header file and renders it
    //<InputBar> Renders the inputbar component
    return (

      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options = {{headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options = {{headerShown: false }} name="Home" component={HomeScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>

      // <View style={styles.container}>
      //   {statusbar}

      //   <Header title="Logbook" />

      //   <InputBar
      //     addNewLog={() => this.addNewLog()}
      //     textChange={logbookInput => this.setState({ logbookInput })}
      //     logbookInput={this.state.logbookInput}
      //   />

      //   <FlatList
      //     data={this.state.logbook}
      //     extraData={this.state}
      //     keyExtractor={(item, index) => index.toString()}
      //     renderItem={({ item, index }) => {
      //       return (
      //         <LogItem logItem={item} removeLog={() => this.removeLog(item)} />
      //       )
      //     }}
      //   />

      // </View>

    );
  }
}


//Stylesheet specifications
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#342F4E',
  },
  statusbar: {
    backgroundColor: '#ffce00',
    height: 20
  }
});

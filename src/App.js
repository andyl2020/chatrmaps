import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './styles/App.css';
import { randomName, randomColor } from "./functions/demo";
import Chat from './components/Chat';
import Map from './components/Map';
import ListOfUsers from './components/ListOfUsers';

class App extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
    },
    members: []
  }

  constructor() {
    super();
    this.drone = new window.Scaledrone("448LX1LCXbsGUhUI", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });

    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });

    });
    room.on('members', (members) => {
      const member_list = [];
      for(var member in members){
        if(member.clientData){
            if (member.clientData.username){
              member_list.push(member.clientData.username);
            }
        }
      }
      console.log(member_list);
      this.setState({members: member_list});
    });
    room.on('member_join', (member) => {
      const member_list = this.state.members;
      if (member.clientData){
        if (member.clientData.username){
          member_list.push(member.clientData.username);
        }
      }
      console.log(member_list);
      this.setState({members: member_list});
    });


  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/"
            render={() =>
              <Map messages={this.state.messages}
                   member={this.state.member}
                   numMembers={this.state.members.length}/>
            }
          >
          </Route>
          <Route exact path="/chat"
            render={() =>
              <Chat messages={this.state.messages}
                member={this.state.member}
                onSendMessage={this.onSendMessage} />
            }
          >
          </Route>
          <Route exact path="/users"
            render={() =>
              <ListOfUsers members={this.state.members}/>
            }
          >
          </Route>
        </Switch>
      </Router>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
    const ml = document.getElementById('messageList');
    ml.scrollTop = ml.scrollHeight;
  }

}


// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default App;

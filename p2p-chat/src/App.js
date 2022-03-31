import React, { Component } from 'react';
import { LioWebRTC } from 'react-liowebrtc';
import './App.css';
import ChatBox from './ChatBox'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatLog: [],
      options: {
        debug: true,
        dataOnly: true
      },
      nickName: ''
    };
  }

  addChat = (name, message, alert=false) => {
    this.setState({ chatLog: this.state.chatLog.concat({
      name,
      message: `${message}`,
      timestamp: `${Date.now()}`,
      alert
    })});
  }

  join = (webrtc) => webrtc.joinRoom('p2p-chat-demo');

  handleCreatedPeer = (webrtc, peer) => {
    this.addChat(`Peer-${peer.id.substring(0,5)} joined!`, '', true);
  }

  handlePeerData = (webrtc, type, payload, peer) => {
    switch(type) {
      case 'chat':
        if (this.state.nickName) this.addChat(`${this.state.nickName}:`, payload);
        else this.addChat(`Peer-${peer.id.substring(0,5)}:`, payload);
        break;
      default:
        return;
    };
  }

  render() {
    const { chatLog } = this.state;
    return(
      <div className='App'>
        <LioWebRTC
          options={this.state.options}
          onReady={this.join}
          onCreatedPeer={this.handleCreatedPeer}
          onReceivedPeerData={this.handlePeerData}
        >
          <ChatBox 
            chatLog={chatLog}
            onSend={(msg) => msg && this.addChat('You:', msg)}
          />
        </LioWebRTC>
      </div>
    );
  }
}

export default App;

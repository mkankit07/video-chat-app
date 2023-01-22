import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import AgoraUIKit from "agora-react-uikit";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [videoCall, setVideoCall] = useState(true);

  const rtcProps = {
      appId: "d7612f62083147968254c8f4be0f932c",
      channel: "livestream",
      token: "006d7612f62083147968254c8f4be0f932cIABlcA7iXODNAEzi3JFDS6Y4XuvZNCu+z+YBQJ6mB9QADZ1fCyoAAAAAEACIrM2QpgPOYwEA6AOmA85j",
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
}
return videoCall ? (
  <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
  </div>
) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
);
}

export default App

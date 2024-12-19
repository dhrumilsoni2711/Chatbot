import config from './ChatBot/config.js'
import MessageParser from './ChatBot/MessageParser.jsx'
import ActionProvider from './ChatBot/ActionProvider.jsx'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import { IoMdChatboxes } from "react-icons/io";
import './App.css'
import { useState } from 'react'

function App() {

  const [chatStatus,setChatStatus] = useState(false);
  console.log(chatStatus);

  const chatToggle = () => {
    setChatStatus(prevStatus => !prevStatus);
  };

  return (
    <>
      <div className='main-container'>
        <h1>React Chat Bot</h1>
        <button className='bg-white p-3 text-2xl rounded-full' onClick={() => chatToggle()}>
          <IoMdChatboxes />
        </button>
        {chatStatus == false ? null :
          <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />}
      </div>
    </>
  )
}

export default App

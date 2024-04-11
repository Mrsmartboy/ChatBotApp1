import Chatbot from 'react-chatbot-kit'
 import 'react-chatbot-kit/build/main.css';
import config from './config.js'
 import MessageParser from './MessageParser.js'
 import ActionProvider from './ActionProvider.js'
import Header from './Header.js';
 import './Chat.css'

const Chat =()=>{
    return(
        <div className='chat-container'>
             <Header/>
            <div className='chatbot-main-container'>
        <Chatbot actionProvider={ActionProvider} config={config} messageParser={MessageParser}
          placeholderText='Enter Your Query'
           disableScrollToBottom
           headerText='Remedy Chatbot' />
           </div>
        
        </div>
    )

}

export default Chat
import Chatbot from 'react-chatbot-kit'
 import 'react-chatbot-kit/build/main.css';
import config from './config.js'
 import MessageParser from './MessageParser.js'
 import ActionProvider from './ActionProvider.js'

 import './Chat.css'

const Chat =()=>{
    return(
        <div className='chat-container'>
        <Chatbot actionProvider={ActionProvider} config={config} messageParser={MessageParser}
          placeholderText='Enter Your Query'
           disableScrollToBottom
           headerText='Remedy Chatbot' />
        </div>
    )

}

export default Chat
import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import styled from 'styled-components';
import Header from './Header';
import { serverUrl , sendEndpoint } from './config.js';
import TopMenu from '../components/Main/TopMenu';

const SendUrl = serverUrl + sendEndpoint;

const Chat = styled.div`
width: 414px;
height: 896px;
border-radius: 32px;
background: #FAFAFA;
position: relative;
`;

const ContainerChat = styled(ChatContainer)`
height: 576px;
width: 414px;
position: absolute;
margin-top: 80px;
`;



function Chatbot() {
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([]);
  
    const handleSend = async (message) => {
      const newMessage = {
        message: message,
        sender: "user",
        direction: "outgoing",
        time : getformattedTime(),
      };

      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setTyping(true);
      
      try {
        const response = await processtogpt(newMessage);
          if (response.code === 201) {
            const gptResponse = {
              message: response.data.chatResponse.content,
              sender: "ChatGPT",
              time: response.data.chatResponse.time,
            };
            setMessages([...updatedMessages, gptResponse]);
            setTyping(false);
          }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    function getformattedTime() {
        const date = new Date();
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    }

    async function processtogpt(chatMessage) {
      try {
        const response = await fetch(SendUrl, {
          method: "post",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            nickname: "testUser", // 닉네임 받아오기 
            content: chatMessage.message,
            time: chatMessage.time,
          })
        });
        
        if (response.ok) {
          return await response.json();
        } else {
          throw new Error("HTTP Error: " + response.status);
        }
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    }

    return(
        <Chat>
          <Header />
          <TopMenu />
          <ContainerChat>
            <MessageList scrollBehavior='smooth' style={{backgroundColor : '#FAFAFA'}}
            typingIndicator={typing ? <TypingIndicator content = "ChatGPT가 답변을 작성하고 있어요!" style={{fontFamily: 'Roboto', backgroundColor: '#FAFAFA'}}/> : null} >
              {messages.map((message,i) => {
                return ( <Message key={i} model={message} >
                         <Message.Footer>{message.time}</Message.Footer>
                          </Message>
                        );
                })}    
            </MessageList>
            <MessageInput onSend={handleSend} attachButton = "none"/>
          </ContainerChat>
        </Chat>
    );
}

export default Chatbot;
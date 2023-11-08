import React, { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import styled from 'styled-components';
import Header from '../components/Main/Header';
import TopMenu from '../components/Main/TopMenu';
import BottomMenu from '../components/Main/BottomMenu'
import { IoMdTrash } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { serverUrl , sendEndpoint, chatclearEndpoint } from '../config'; //확인

const Chat = styled.div`
width: 414px;
height: 896px;
border-radius: 32px;
background: #FAFAFA;
position: relative;
`;

const ContainerChat = styled(ChatContainer)`
height: 625px;
width: 414px;
position: absolute;
margin-top: 198px;
`;

const Trashicon = styled(IoMdTrash)`
height: 33px;
width: 33px;
margin-top: 774px;
margin-left: 3px;
position:absolute;
color: lightblue;
cursor: pointer;
`;

function Chatbot() {
  const { nickname } = useParams();
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([]);
    
    useEffect(() => {
      const nickname = localStorage.getItem('nickname');
      const ConnectUrl = `${serverUrl}/api/chat/${nickname}`;

      fetchMessages(ConnectUrl);

    }, [nickname]);
  
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
              direction: "incoming",
            };
            setMessages([...updatedMessages, gptResponse]);
            setTyping(false);
          } else if (response.code === 400) {
            alert(response.message);
          } else if (response.code === 500) {
            alert(response.message);
          } else {
            alert('오류가 발생하였습니다');
          }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    function getformattedTime() {
        const date = new Date();
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    }

    async function fetchMessages(Url) {
      try {
        const response = await fetch(Url, {
          method: "GET", 
          headers: {  
            "Content-Type": "application/json;charset=UTF-8",
          }, 
        });
        const data = await response.json();

        if(data.code === 200) {
          const chatOrder = data.data.chatOrderResponse;
          chatOrder.sort((a, b) => a.order - b.order);
          const formattedMessages = chatOrder.map(item => ({
            message: item.content,
            sender: item.role === "user" ? "user" : "ChatGPT",
            time: item.time,
            direction: item.role === "user" ? "outgoing" : "incoming",
          }));

          setMessages(formattedMessages);

        } else if (data.code === 201) {
          const WelcomMessage = {
            message: data.data.chatResponse.content,
            sender: "ChatGPT",
            time: data.data.chatResponse.time,
            direction: "incoming",
          };
          setMessages([WelcomMessage]);

        } else if (data.code === 500) {
          alert(data.message);
        } else {
          alert('오류가 발생하였습니다');
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const SendUrl = serverUrl + sendEndpoint;

    async function processtogpt(chatMessage) {
      const nickname = localStorage.getItem('nickname');
      try {
        const response = await fetch(SendUrl, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            nickname: nickname,
            content: chatMessage.message,
            time: chatMessage.time,
          })
        });
        return await response.json();
      } catch (error) {
        console.error("Error:", error);
      }
    }

    const TrashUrl = serverUrl + `/api/chat/clear`; //확인

    const handletrash = async () => {
      const nickname = localStorage.getItem('nickname');
      try {
        const response = await fetch(TrashUrl, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify({
            nickname: nickname,
          }),
        });
        const resdata = await response.json();

        if (resdata.code === 201) {
          alert(resdata.message);
          const initialMessage = {
            message: resdata.data.chatResponse.content,
            sender: "ChatGPT",
            time: resdata.data.chatResponse.time,
            direction: "incoming",
          };
          setMessages([initialMessage]);
        } else if (resdata.code === 500) {
          alert(resdata.message);
        } else {
          alert('오류가 발생하였습니다');
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    return(
        <Chat>
          <Header />
          <TopMenu />
          <ContainerChat>
            <MessageList scrollBehavior='smooth' style={{backgroundColor : '#FAFAFA'}}
            typingIndicator={typing ? <TypingIndicator content = "ChatGPT가 답변을 작성하고 있어요!" style={{fontFamily: 'Poppins', backgroundColor: '#FAFAFA'}}/> : null} >
              {messages.map((message,i) => {
                return ( <Message key={i} model={message} style={{fontFamily: 'Poppins', borderRadius: '10px', marginBottom : '15px'}}>
                         <Message.Footer>{message.time}</Message.Footer>
                         </Message>
                        );
                })}     
            </MessageList>
            <MessageInput style={{height: '67px', paddingTop: '13px', paddingBottom: '12px', paddingLeft: '27px'}} onSend={handleSend} attachButton='none'/>
          </ContainerChat>
          <Trashicon id='trashicon' onClick={handletrash}/>
          <BottomMenu />
        </Chat>
    );
}

export default Chatbot;
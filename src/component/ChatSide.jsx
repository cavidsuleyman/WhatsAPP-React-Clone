import React from 'react';
import ChatNavbar from './ChatNavbar';
import MessageSide from './MessageSide';
import WriteInput from './WriteInput';

const ChatSide = () => {
  return (
    <div className='chatSide'>
        <ChatNavbar/>
        <MessageSide/>
        <WriteInput/>
    </div>
  )
}

export default ChatSide
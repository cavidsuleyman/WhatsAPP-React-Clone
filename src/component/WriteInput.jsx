import React, { useContext, useState } from 'react';
import {BsEmojiSmile} from "react-icons/bs";
import { PaperClipOutlined } from '@ant-design/icons';
import { MdKeyboardVoice } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { UserContext } from '../Context/UserContext';
import { IoClose } from 'react-icons/io5';



const WriteInput = () => {

  let {showattach, writeMessage, setWriteMessage, sendMsg, setSendMsg, openEmoji, openCloseEmojiPage} = useContext(UserContext)

  

  const clickMessageSend = async () => {
    if(sendMsg.length > 0) {
      await writeMessage.push({
        message: sendMsg,
        msgHours: (new Date).getHours(),
        msgMinutes: (new Date).getMinutes(),
        statusUser: 2,
        chatID: 0
      });
      await setWriteMessage([...writeMessage])
      setSendMsg('')
    }
  }

  const sendMessageByEnter = (e) => {
      if(e.keyCode === 13) clickMessageSend()
  }

  return (
    <div className='writemessage'>
      {
        openEmoji ? (
          <button onClick={openCloseEmojiPage}><IoClose/></button>
        )
        :
        ( 
          <button onClick={openCloseEmojiPage}><BsEmojiSmile/></button>
        )
      }

        <button onClick={showattach}><PaperClipOutlined /></button>
        <input
         value={sendMsg}
         onKeyDown={sendMessageByEnter}
         onChange={(e) => setSendMsg(e.target.value)}
         type="text"
         placeholder='Type a message'/>
        
         {
          !sendMsg ? (
            <button><MdKeyboardVoice/></button>
          )
          :
          (
            <button><IoMdSend/></button>
          )
         }
        
    </div>
  )
}

export default WriteInput
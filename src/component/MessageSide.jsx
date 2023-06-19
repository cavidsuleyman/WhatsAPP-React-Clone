import React, { useContext, useEffect } from 'react';
import {BsEmojiLaughing, BsCheck2All, BsCheck2} from "react-icons/bs";
import { UserContext } from '../Context/UserContext';



const MessageSide = () => {

  let {writeMessage, setWriteMessage} = useContext(UserContext)

  const statusMsg = (status) => {
    switch(status) {
        case 1: return <BsCheck2/>;
        case 2: return <> <BsCheck2All/> </> ;
        case 3: return <> <BsCheck2All style={{color: "blue"}}/>  </>;
        default : {
            console.error("Message is not found");
        }
    }
}

      let defaultmessage = [
        {
          message: "Hello, Welcome WhatsApp",
          msgHours: "15",
          msgMinutes: "00",
          statusUser: 1,
          chatID: 1,
        }
      ];

      useEffect(()=>{
        setWriteMessage(defaultmessage);
      },[])


  return (
    <div className='messageSide'>
      {
        writeMessage.map((v,i) => ( 
        <div key={i}>
          <div key={i} className={v.chatID === 0 ? "messageText my_message" : "messageText my_message"}>
             <button>
                 <BsEmojiLaughing/>
             </button>
             <p>{v.message}
              <br/>
             <span>{v.msgHours}:{v.msgMinutes} {statusMsg(v.statusUser)}</span>        
             </p>
         </div>
        
 

 
         <div className={v.chatID === 1 ? "messageText frnd_message" : "displayNone"}>
             <p>{v.message}
              <br/>
             <span>{v.msgHours}:{v.msgMinutes} {statusMsg(v.statusUser)}</span>
             </p>
             <button>
                 <BsEmojiLaughing/>
             </button>
         </div>
      </div>
        ))
      }
    </div>
  )

  
}

export default MessageSide
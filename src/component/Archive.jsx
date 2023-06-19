import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { HiArrowLeft } from "react-icons/hi";
import {RxChevronDown} from "react-icons/rx";
import { Dropdown } from 'antd';


const items = [
  {
    label: <a href="#?">Archive chat</a>,
    key: '0',
  },
  {
    label: <a href="#?">Mute notifications</a>,
    key: '1',
  },
  {
    label: <a href="#?">Delete chat</a>,
    key: '2',
  },
  {
    label: <a href="#?">Pin chat</a>,
    key: '3',
  },
  {
    label: <a href="#?">Mark as unread</a>,
    key: '4',
  }
];




const Archive = ({showArchive}) => {


    let {closeArchivePage, users, activeUsers} = useContext(UserContext)


    let showArchiveMain = showArchive ? "archiveMenu showArchive" : "archiveMenu"

  return (
    <div className={showArchiveMain}>
      <div className='profilTabmenu-greenSide'>
         <button onClick={closeArchivePage}><HiArrowLeft/></button>
         <span>Archive</span>
      </div>
      <div className='archiveMenu-title'>
          <span>These chats stay archived when new messages are received. To change this experience go to Settings - Chats on your phone </span>
      </div>
    <div>
      <div className='user-side'>
              {
              users.map((v, i) => !v.status && (
                  <div className='user-chat-card' key={"user" + i}>
                      <div className='user-profilImg'>
                          <img src={v.imgUrl}
                              alt=""/>
                      </div>
                      <div className='user-chatInfon'>
                          <div className='user-message'>
                              <span>{v.userName}</span>
                              <p>{v.lastMsg}</p>
                          </div>

                          <div className='user-date'>
                              <span>{v.time}</span>
                              <Dropdown  menu={{items}} trigger={['click']}>
                                  <a href='#?' onClick={(e) => e.preventDefault()}>
                                      <button onClick={() => activeUsers(i)} className='btn-icon'>
                                          <RxChevronDown color='#54656F'/>
                                      </button>
                                  </a>
                            </Dropdown>
                          </div>
                      </div>
                  </div>
              ))
          } 
          </div>
    </div>

        
        </div>
  )
}

export default Archive
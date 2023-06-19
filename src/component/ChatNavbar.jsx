import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import { FaSearch } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Dropdown } from 'antd';

const ChatNavbar = () => {

    const {chat} = useContext(UserContext);

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

  return (
    <div className='chatNavbar'>
        <div className='chatNavbar-leftSide'>
            <div className='chatNavbar-photo'>
                <img src={chat.imgUrl} alt="" />
            </div>
            <div className='chatNavbar-title'>
                <span>{chat.userName}</span>
                <span>{chat.time}</span>
            </div> 
        </div>
        <div className='chatNavbar-rightSide'>
               <button><FaSearch/></button>
               <Dropdown placement='bottomRight' menu={{items}} trigger={['click']}>
                                <a href='#?' onClick={(e) => e.preventDefault()}>
                                  <button><BsThreeDotsVertical/></button> 
                                </a>
                </Dropdown>
               
        </div>
    </div>
  )
}

export default ChatNavbar
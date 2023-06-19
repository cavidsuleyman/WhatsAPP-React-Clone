import React, {useContext} from 'react';
import {RxChevronDown} from "react-icons/rx";
import {BiArchiveIn} from "react-icons/bi";
import { Dropdown } from 'antd';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { IoIosDoneAll } from "react-icons/io";


const UserSide = () => {

    let {openArchivePage, users, deactiveUsers, setChat} = useContext(UserContext);

    let navigate = useNavigate()

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
        <div className='user-side'>
            <div className='user-chat-card'>
                <div className='user-profilImg'>
                    <BiArchiveIn color='#00A884'
                        fontSize={20}/>
                </div>
                <div onClick={openArchivePage} className='user-chatInfon'>
                    <div className='user-message'>
                        <p>Archived</p>
                    </div>

                    <div className='user-date'>
                        <span>1</span>
                    </div>
                </div>
            </div>
            {
            users.map((v, i) => v.status && (
                <div onClick={() => setChat(v)} className='user-chat-card' key={"user" + i}>
                    <div className='user-profilImg'>
                        <img src={v.imgUrl}
                            alt=""/>
                    </div>
                    <div className='user-chatInfon'>
                        <div className='user-message'>
                            <span>{v.userName}</span>
                            <br />
                            <span className='doneIcon'>
                                <IoIosDoneAll color="blue" size={22}/> 
                                {v.lastMsg}
                            </span>
                        </div>

                        <div className='user-date'>
                            <span>{v.time}</span>
                            <Dropdown  menu={{items}} trigger={['click']}>
                                <a href='#?' onClick={(e) => e.preventDefault()}>
                                    <button className='btn-icon'>
                                         <RxChevronDown  color='#54656F'/>
                                    </button>
                                </a>
                           </Dropdown>
                        </div>

                    </div>
                </div>
            ))
        } </div>
    )
}

export default UserSide

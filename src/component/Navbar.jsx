import React, { useContext } from 'react';
import avatar from '../img/avatar.jpg';
import { FaUsers } from "react-icons/fa";
import { AiOutlineSync } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Dropdown } from 'antd';
import { UserContext } from '../Context/UserContext';


const items = [
  {
    label: <a href="#?">New group</a>,
    key: '0',
  },
  {
    label: <a href="#?">New community</a>,
    key: '1',
  },
  {
    label: <a href="#?">Starred messages</a>,
    key: '2',
  },
  {
    label: <a href="#?">Select chats</a>,
    key: '3',
  },
  {
    label: <a href="#?">Settings</a>,
    key: '4',
  },
  {
    label: <a href="#?">Log out</a>,
    key: '5',
  },
  
];



const Navbar = () => {

let {openEditPage} = useContext(UserContext)
let {openCommunityPage} = useContext(UserContext)
let {openGroupPage} = useContext(UserContext)



  return (
    <div className='navbar'>
        <div className='navbar-profile'>
            <img onClick={openEditPage} src={avatar} className='image' alt="" />
        </div>
        <div className='navbar-icons'>
            <button onClick={openCommunityPage} title='Communities'><FaUsers/></button>
            <button title='Status'><AiOutlineSync/></button>
            <button onClick={openGroupPage} title='New Chat'><BiCommentDetail/></button>
            <Dropdown menu={{items}} trigger={['click']}>
                <a href='#?' onClick={(e) => e.preventDefault()}>
                    <button title='Menu'><BsThreeDotsVertical/></button>
                </a>
             </Dropdown>
        </div>
    </div>
  )
}

export default Navbar
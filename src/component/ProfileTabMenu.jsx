import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { HiArrowLeft } from "react-icons/hi";
import { Image, Typography  } from 'antd';
import avatar from '../img/avatar.jpg';
const { Paragraph } = Typography;


const ProfileTabMenu = ({showPage}) => {

const [editableStr, setEditableStr] = useState('Username');
const [editableAbout, setEditableAbout] = useState('User');

let className = showPage ? "profilTabmenu showPage" : "profileTabmenu";

let {closeEditPage} = useContext(UserContext)

  return (
    <div className={className}>
        <div className='profilTabmenu-greenSide'>
            <button onClick={closeEditPage}><HiArrowLeft/></button>
            <span>Profile</span> 
        </div>
        <div className='profileTabmenu-photo'>
            <div className='profil-photo'>
                <Image
                    className='image'
                    width={200}
                    src={avatar}
                />
            </div>
        </div>
        <div className='profilTabmenu-edit'>
            <p>Your name</p>
            <div className='profil-edit'>
                <Paragraph
                    editable={{
                    onChange: setEditableStr,
                    }}
                >
                    {editableStr}
                </Paragraph>
            </div>
        </div>
        <div className='profilTabmenu-title'>
            <p>This is not your username or pin. This name will be visible to your WhatsApp contacts.</p>
        </div>
        <div className='profilTabmenu-edit'>
            <p>About</p>
            <div className='profil-edit'>
                <Paragraph
                    editable={{
                    onChange: setEditableAbout,
                    }}
                >
                    {editableAbout}
                </Paragraph>
            </div>
        </div>
    </div>
  )
}

export default ProfileTabMenu
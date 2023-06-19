import React, { useContext } from 'react';
import Archive from '../component/Archive';
import ChatSide from '../component/ChatSide';
import ProfileTabMenu from '../component/ProfileTabMenu';
import Sidebar from '../component/Sidebar';
import Communty from '../component/Communty';
import { UserContext } from '../Context/UserContext';
import  Group  from '../component/Group';
import AttachMenu from '../component/AttachMenu';
import OpenCamera from '../component/OpenCamera';
import EmojiSide from '../component/EmojiSide';

const Home = () => {

let {openEditMenu, openEmoji,openCamera, archiveMenu, communtyMenu, openGroup, openattach} = useContext(UserContext)


  return (
    <div className='chat-page-main'>
      <ProfileTabMenu showPage={openEditMenu}/>
      <Archive showArchive={archiveMenu}/>
      <Communty showCommunty={communtyMenu}/>
      <AttachMenu showAttachMenu={openattach}/>
      <OpenCamera openCamere={openCamera}/>
      <Group showGroup={openGroup}/>
      <EmojiSide showEmoji={openEmoji}/>
        <div className="container">
            <Sidebar/>
            <ChatSide/>
        </div>
    </div>
  )
}

export default Home;
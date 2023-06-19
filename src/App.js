import './App.css';
import Home from './page/Home';
import {UserContext} from './Context/UserContext'
import { useState, useEffect } from 'react';
import { contactData, usersData } from './fakedata';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Loading from './component/Loading'

function App() {

let [openEditMenu, setOpenEditMenu] = useState(false)
let [archiveMenu, setArchiveMenu] = useState(false)
let [communtyMenu, setCommuntyMenu] = useState(false)
let [openGroup, setOpenGroup] = useState(false)
let [users, setUsers] = useState(usersData);
let [chat, setChat] = useState(usersData[0]);
let [contactUser, setContactUser] = useState(contactData);
let [writeMessage, setWriteMessage] = useState([])
let [openattach, setOpenattach] = useState(false);
const [progress, setProgress] = useState(0);
const [loading, setLoading] = useState(true);
let [sendMsg, setSendMsg] = useState("");
let [openCamera, setOpenCamera] = useState(false);
let [openEmoji, setOpenEmoji] = useState(false);


const closeEditPage = () => {
  setOpenEditMenu(s => !s)
}

const openEditPage = () => {
  setOpenEditMenu(s => !s)
}

const closeArchivePage = () => {
  setArchiveMenu(s => !s)
}

const openArchivePage = () => {
  setArchiveMenu(s => !s)
}

const closeCommunityPage = () => {
  setCommuntyMenu(s => !s)
}

const openCommunityPage = () => {
  setCommuntyMenu(s => !s)
}

const openCameraPage = () => {
  setOpenCamera(s => !s)
}

const closeCameraPage = () => {
  setOpenCamera(s => !s)
}

const openCloseEmojiPage = () => {
  setOpenEmoji(s => !s)
}

const closeGroupPage = () => {
  setOpenGroup(s => !s)
}

const openGroupPage = () => {
  setOpenGroup(s => !s)
}

const deactiveUsers = (i) => {
  users[i].status = false;
  setUsers([...users])
} 
const activeUsers = (i) => {
  users[i].status = true;
  setUsers([...users])
} 

const showattach = () => {
  setOpenattach((s) => !s)
}



useEffect(() => {
  setTimeout(() => {
    if(progress >= 100) setLoading(false);
    else {
        const increament = Math.floor(Math.random() * (10 + 1)) + 3;
        setProgress(progress + increament)
    }
  }, 300)
}, [progress])


const sendLocation = () => {
  navigator.geolocation.getCurrentPosition((e) => {

            let msj =
            <iframe 
            width="250" 
            height="150" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.3094912269194!2d20.001792315824055!3d50.08049212183354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47164533734b5711%3A0xad93a0ea61557990!2sOsiedle%20Avia%203%2C%2031-871%20Krak%C3%B3w!5e0!3m2!1sen!2spl!4v1681138219470!5m2!1sen!2spl"
           >
           </iframe>


      writeMessage.push({
        message: msj,
        msgHours: (new Date).getHours(),
        msgMinutes: (new Date).getMinutes(),
        statusUser: 2,
        chatID: 0
    });
    setWriteMessage([...writeMessage]);
  });
};


  return (
    <>
      {
        loading ?
        (
            <Loading progress={progress}/>
        )

        : 
        (
          <UserContext.Provider  value={{openCloseEmojiPage ,openEmoji, setOpenEmoji,closeCameraPage, openCameraPage,setOpenCamera,openCamera,sendMsg, setSendMsg,sendLocation, openattach, setOpenattach, showattach, writeMessage, setWriteMessage, chat,setChat,contactUser,setContactUser,contactData,deactiveUsers, activeUsers,users, setUsers, usersData, openGroup,setOpenGroup,closeGroupPage, openGroupPage, openEditMenu, setOpenEditMenu, closeEditPage, openEditPage, archiveMenu, setArchiveMenu, closeArchivePage, openArchivePage, communtyMenu, setCommuntyMenu, closeCommunityPage, openCommunityPage}}>
             <BrowserRouter>
                  <Routes>
                    <Route path='/'>
                      <Route index element={<Home/>}/>
                    </Route>
                  </Routes>
              </BrowserRouter>
          </UserContext.Provider>
  )
      }
    </>
  );
}

export default App;

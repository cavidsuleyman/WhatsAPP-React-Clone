import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext';
import { HiArrowLeft } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const Group = ({showGroup}) => {

  const [searchIcon, setSearchIcon] = useState(true)

    let {closeGroupPage, contactUser} = useContext(UserContext)

    let showGroupMain = showGroup ? "showGroupMain showGroup" : "showGroupMain"


  return (
    <div className={showGroupMain}>
      <div className='profilTabmenu-greenSide'>
         <button onClick={closeGroupPage}><HiArrowLeft/></button>
         <span>New chat</span>
      </div>  
      <div className='search-side'>
          <div className='search-input showInput'>
              {
                  searchIcon ? <FaSearch color='#54656F'/> : <HiArrowLeft color='#54656F'/>
              }
            
            <input
            type="text" 
            placeholder='Search contacts'
            onFocus={() => setSearchIcon(!true)}
            onBlur={() => setSearchIcon(true)}
            />
          </div>
      </div>
      <section>
           <div className='show-group-card'>
                <div className='show-group-profilImg'>
                   <div className='show-group-circle'>
                       <FiUsers color='#ffffff'
                        fontSize={26}/>
                   </div>
                </div>
                <div className='show-group-chatInfon'>
                    <div className='show-group-message'>
                        <p>New Group</p>
                    </div>
                </div>
            </div>
           <div className='show-group-card'>
                <div className='show-group-profilImg'>
                   <div className='show-group-circle'>
                       <FiUsers color='#ffffff'
                        fontSize={26}/>
                   </div>
                </div>
                <div className='show-group-chatInfon'>
                    <div className='show-group-message'>
                        <p>New Communtiy</p>
                    </div>
                </div>
            </div>
              <p className='heading-title'>Contacts on WhatsApp</p>
            {
            contactUser.map((v, i) => (
                <div className='user-chat-card' key={"user" + i}>
                    <div className='user-profilImg'>
                        <img src={v.imgUrl}
                            alt=""/>
                    </div>
                    <div className='user-chatInfon'>
                        <div className='user-message'>
                            <span>{v.userName}</span>
                            <p>{v.CommentMsg}</p>
                        </div>
                      </div>
                </div>
            ))
        }
      </section>
            
    </div>
  )
}

export default Group
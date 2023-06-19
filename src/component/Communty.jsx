import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { HiArrowLeft } from "react-icons/hi";
import comPhoto from '../img/iconwhatsapp.png'

const Communty = ({showCommunty}) => {

    let {closeCommunityPage} = useContext(UserContext)

    let showCommunityMain = showCommunty ? "communityMenu showCommunity" : "communityMenu"

  return (
    <div className={showCommunityMain}>
        <div className='profilTabmenu-greenSide'>
            <button onClick={closeCommunityPage}><HiArrowLeft/></button>
            <span>Communities</span>
        </div>
        <div className='showCommunityMain-card'>
            <div className='showCommunityMain-img'>
                <img src={comPhoto} alt="" />
            </div>
            <div className='showCommunityMain-title'>
                <h2>Introducting communities</h2>
                <p>Easily organize your related groups and send annoucements. Now, your communities, like neighborhood or schools, can have their own space.</p>
            </div>
            <div className='showCommunityMain-btn'>
                <button>start a community</button>
            </div>
        </div>
    </div>
  )
}

export default Communty
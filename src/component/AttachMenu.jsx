import React, { useContext } from 'react'
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdAddBusiness, MdPhotoCamera, MdStickyNote2 } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { RiFile4Line } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { UserContext } from '../Context/UserContext';



const AttachMenu = ({showAttachMenu}) => {

    let {sendLocation, openCameraPage} = useContext(UserContext)

    let showAttachMain = showAttachMenu ? "attachmenu showAttachMenu" : "attachmenu" ;


  /*  const showBattery = () => {
      navigator.getBattery().then((e)=>{
              console.log(e.charging);
              console.log(e.level);
              if(e.level<1){
                      alert("sifir")
              } 
      });
    };
  
    const showInternet = () => {
          console.log(navigator.onLine);
    }
    
    useEffect(()=>{
        window.addEventListener("online", ()=>{
                console.log("online");
        })
        window.addEventListener("offline", ()=>{
                console.log("offline");
        })
    })
    
    */

  return (
    <div className={showAttachMain}>
         <div className="attachmenu-icon yellow-icon">
        <button onClick={sendLocation} title="Quick Replies">
          <GoLocation style={{ color: "white", fontSize: 25 }} />
        </button>
      </div>
      <div className="attachmenu-icon green-icon">
        <button title="Catalog">
          <MdAddBusiness style={{ color: "white", fontSize: 25 }} />
        </button>
      </div>
      <div className="attachmenu-icon lightblue-icon">
        <button title="Contact">
          <FaUserAlt style={{ color: "white", fontSize: 22 }} />
        </button>
      </div>
      <div className="attachmenu-icon mor-icon">
        <button title="Document">
          <RiFile4Line style={{ color: "white", fontSize: 23 }} />
        </button>
      </div>
      <div className="attachmenu-icon red-icon">
        <button onClick={openCameraPage} title="Camera">
          <MdPhotoCamera style={{ color: "white", fontSize: 23 }} />
        </button>
      </div>
      <div className="attachmenu-icon blue-icon">
        <button title="Sticker">
          <MdStickyNote2 style={{ color: "white", fontSize: 25 }} />
        </button>
      </div>
      <div className="attachmenu-icon pink-icon">
        <button title="Photos & Videos">
          <HiOutlinePhotograph style={{ color: "white", fontSize: 25 }} />
        </button>
      </div>
    </div>
  )
}

export default AttachMenu
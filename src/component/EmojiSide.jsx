import React from 'react';
import { AiOutlineClockCircle, AiFillCar } from "react-icons/ai";
import { BsFillEmojiSmileFill, BsFlag } from "react-icons/bs";
import { RiBearSmileFill } from "react-icons/ri";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { BiFootball, BiHash } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";

const EmojiSide = ({showEmoji}) => {

    const showEmojiMain = showEmoji ? "iconmenu showsmile" : "iconmenu";

  return (
    <div className={showEmojiMain}>
        <div className='iconmenu-nav'>
          <div className='iconmenu-nav-icon'>
              <button><AiOutlineClockCircle style={{ color: "grey", fontSize: 22 }}/></button>
          </div>
          <div className='iconmenu-nav-icon'>
              <button><BsFillEmojiSmileFill style={{ color: "#677680", fontSize: 22 }}/></button>
          </div>
          <div className='iconmenu-nav-icon'>
              <button><RiBearSmileFill style={{ color: "#677680", fontSize: 22 }}/></button>
          </div>
          <div className='iconmenu-nav-icon'>
              <button><MdEmojiFoodBeverage style={{ color: "#677680", fontSize: 22 }}/></button>
          </div>
          <div className='iconmenu-nav-icon'>
               <button><BiFootball style={{ color: "#677680", fontSize: 22 }}/></button>
          </div>
          <div className='iconmenu-nav-icon'>
                 <button><AiFillCar style={{ color: "#677680", fontSize: 22 }}/></button>
          </div>
          <div className='iconmenu-nav-icon'>
                   <button><FaRegLightbulb style={{ color: "#677680", fontSize: 22 }}/></button>
          </div>
          <div className='iconmenu-nav-icon'>
                  <button><BiHash style={{ color: "#677680", fontSize: 22 }}/></button>
          </div>
          <div className='iconmenu-nav-icon'>
                <button><BsFlag style={{ color: "#677680", fontSize: 21 }}/></button>
          </div>
        </div>
        <div className='iconmenu-search'>
            <form>
                <input type='search' placeholder='Search Emoji'/>
            </form>
        </div>
        <div className='iconmenu-smile'>
            <button>
               <span style={{fontSize: 20}}>&#128512;</span>
            </button>
            <button>
               <span style={{fontSize: 20}}>&#128513;</span>
            </button>
            <button>
               <span style={{fontSize: 20}}>&#128514;</span>
            </button>
            <button>
               <span style={{fontSize: 20}}>&#128515;</span>
            </button>
            <button>
               <span style={{fontSize: 20}}>&#128516;</span>
            </button>
            <button>
               <span style={{fontSize: 20}}>&#128517;</span>
            </button>
            <button>
               <span style={{fontSize: 20}}>&#128518;</span>
            </button>
            <button>
               <span style={{fontSize: 20}}>&#128519;</span>
            </button>
            <button>
               <span style={{fontSize: 20}}>&#128520;</span>
            </button>
            <button>
               <span style={{fontSize: 20}}>&#128578;</span>
            </button>
            <button>
               <span style={{fontSize: 20}}>&#129312;</span>
            </button>
            <button>
               <span style={{fontSize: 20}}>&#128512;</span>
            </button>
            <button>
               <span style={{fontSize: 20}}>&#128512;</span>
            </button>
            
        </div>
    </div>
  )
}

export default EmojiSide
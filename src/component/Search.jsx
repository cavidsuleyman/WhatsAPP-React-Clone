import React, {useContext, useState} from 'react';
import { FaSearch } from "react-icons/fa";
import { BiFilter } from "react-icons/bi";
import { HiArrowLeft } from "react-icons/hi";
import { UserContext } from '../Context/UserContext';



const Search = () => {

const [searchIcon, setSearchIcon] = useState(true);

const {setUsers, usersData} = useContext(UserContext)

const searchUsers = (e) => {
  e.preventDefault();
  let user = e.target.value;
  console.log(user);
  setUsers(usersData.filter((v,i) => v.userName.toUpperCase().match(user.toUpperCase()) ||  v.lastMsg.toUpperCase().match(user.toUpperCase()) ));
}

  return (
    <div className='search-side'>
        <div className='search-input'>
            {
                searchIcon ? <FaSearch color='#54656F'/> : <HiArrowLeft color='#54656F'/>
            }
           
           <input 
           name='user'
           type="text" 
           placeholder='Search or start new chat'
           onFocus={() => setSearchIcon(!true)}
           onBlur={() => setSearchIcon(true)}
           onChange={searchUsers}
           />
        </div>
        <button><BiFilter/></button>
    </div>
  )
}

export default Search
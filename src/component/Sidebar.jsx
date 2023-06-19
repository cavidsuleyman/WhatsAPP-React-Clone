import React from 'react';
import Navbar from '../component/Navbar';
import Search from '../component/Search';
import UserSide from './UserSide';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Navbar/>
        <Search/>
        <UserSide/>
    </div>
  )
}

export default Sidebar
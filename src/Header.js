import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';


function Header() {
    const dispatch = useDispatch();


    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };


    return (
        <div className='header'>
            <div className='header_left'>
                <img src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' alt="" />
                <div className='header_search'>
                    <SearchIcon />
                    <input type='text' />
                </div>

            </div>

            <div className='header_right'>
                <HeaderOptions Icon={HomeIcon} title='Home' />
                <HeaderOptions Icon={SupervisorAccountIcon} title='Friends' />
                <HeaderOptions Icon={BusinessCenterIcon} title='Projects' />
                <HeaderOptions Icon={ChatIcon} title='Messaging' />
                <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
                <HeaderOptions
                    avatar={true}
                    title='Profile'
                    onClick={logoutOfApp} />



            </div>

        </div>
    )
}

export default Header
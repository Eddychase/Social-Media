import React from 'react'
import { Avatar } from '@material-ui/core';
import './sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src="https://source.unsplash.com/WLUHO9A_xik/1600x900" alt="" />
                <Avatar className='sidebar_avatar' />
                <h2>Eddy Chase</h2>
                <h4>eddykanyz.ek@gmail.com</h4>
            </div>

            <div className='sidebar_stats'>
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className='sidebar_statNumber'>2,000</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className='sidebar_statNumber'>1843</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('programming')}
                {recentItem('software engineering')}
                {recentItem('architecture')}
            </div>


        </div>
    );
}
export default Sidebar;
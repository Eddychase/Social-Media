import React, { useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOptions from './InputOptions'
import Post from './Post'

function Feed() {
    const [posts, setPosts] = useState([]);

    const sendPost = e => {
        e.preventDefault();


    };
    return (
        <div className='feed'>
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button onClick={sendPost} type='submit'> Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
                    <InputOptions Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                    <InputOptions Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                    <InputOptions Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E' />
                </div>
            </div>

            {posts.map((post) => (
                <Post />
            ))}
            <Post name='EddyChase' description='Test Dummy Alert' message='This is all just a game' photoUrl="" />
        </div>
    )
}

export default Feed

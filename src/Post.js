import React from 'react'
import './Post.css';
import { Avatar } from '@material-ui/core';
import InputOptions from './InputOptions';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';

function Post({ name, description, message, photoUrl }) {
    return (
        <div>
            <div className="post">
                <div className="post_header">
                    <Avatar />
                    <div className='post_info'>
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="post_body">
                    <p>{message}</p>
                </div>
                <div className="post_buttons">
                    <InputOptions Icon={ThumbUpAltOutlinedIcon} title='like' color='gray' />
                    <InputOptions Icon={ChatOutlinedIcon} title='comment' color='gray' />
                    <InputOptions Icon={ShareOutlinedIcon} title='share' color='gray' />
                    <InputOptions Icon={SendOutlinedIcon} title='send' color='gray' />
                </div>
            </div>
        </div>
    );
}

export default Post

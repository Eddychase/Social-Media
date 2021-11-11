import React, { forwardRef } from 'react'
import './Post.css';
import { Avatar } from '@material-ui/core';
import InputOptions from './InputOptions';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div>
            <div ref={ref} className="post">
                <div className="post_header">
                    <Avatar src={photoUrl}>
                        {name[0]}
                    </Avatar>
                    <div className='post_info'>
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="post_body">
                    <p>{message}</p>
                </div>
                <div className="post_buttons">
                    <InputOptions Icon={ThumbUpAltOutlinedIcon} title='like' color='white' />
                    <InputOptions Icon={ChatOutlinedIcon} title='comment' color='white' />
                    <InputOptions Icon={ShareOutlinedIcon} title='share' color='white' />
                    <InputOptions Icon={SendOutlinedIcon} title='send' color='white' />
                </div>
            </div>
        </div>
    );
})

export default Post

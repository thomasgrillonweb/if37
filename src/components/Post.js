import React from "react";
import './Post.css';

const Post = ({title, content, date}) => {
    return (
        <div className="post">
            <div className="title">{title}</div>
            <div className="content">{content}</div>
            <div className="date">{date}</div>
        </div>
    );
}

export default Post;
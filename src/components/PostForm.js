import React, { useState } from "react";

import MyButton from "./MyButton/button";
import MyInput from "./MyInput/myInput";

import "../App.css";

const PostForm = ({ addPost, setIsModalVisible }) => {
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title: postTitle,
            body: postBody
        };
        setIsModalVisible(false)
        addPost(newPost)
        setPostTitle('')
        setPostBody('')
    };

    const onChangeTitle = (e) => {
        setPostTitle(e.target.value);
    };
    const onChangeBody = (e) => {
        setPostBody(e.target.value);
    };

    return (
        <form>
            <MyInput value={postTitle}  onChange={onChangeTitle} />
            <MyInput value={postBody} onChange={onChangeBody} />
            <div>
                <MyButton onClick={addNewPost}> Add post </MyButton>
            </div>
        </form >
    );
};

export default PostForm;

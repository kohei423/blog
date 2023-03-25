import React, { useEffect, useState } from 'react';
import "./CreatePost.css";
import {addDoc,collection} from "firebase/firestore"
import {auth, db} from "../firebase"
import { useNavigate } from 'react-router-dom';


const CreatePost = ({isAuth}) => {

    const [title,setTitle] = useState();
    const [postText,setPostText] = useState();

    const navigate = useNavigate();

    const createPoset = async() => {
        try{
            await addDoc(collection(db, "posts"), {
                title: title,
                postsText: postText,
                author: {
                    username: auth.currentUser.displayName,
                    id: auth.currentUser.uid
                },
            });
        }catch(e){
            console.log(e);
        };
        navigate("/");
    };

    useEffect(()=> {
        if(!isAuth) {
            navigate("/login");
        }
    },[]);

    return (
    <div className='createPostPage'>
        <div className='postContainer'>
            <h1>記事を投稿する</h1>
            <div className='inputPost'>
                <div>タイトル</div>
                <input 
                    type="text" 
                    placeholder='タイトルを記入してください' 
                    onChange={(e)=>{setTitle(e.target.value)}}>
                </input>
            </div>
            <div className='inputPost'>
                <div>投稿</div>
                <textarea 
                    placeholder='投稿内容を記入してください'
                    onChange={(e)=>{setPostText(e.target.value)}}>
                </textarea>
            </div>
            <button className='postButton' onClick={createPoset}>投稿する</button>
        </div>
    </div>
    )
};

export default CreatePost;
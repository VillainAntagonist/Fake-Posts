import React, {useEffect, useState} from 'react';
import './App.css';
import ModalWindow from "./components/ModalWindow/ModalWindow";
import CreatPostForm from "./components/common/CreatPostForm";
import { IPosts} from "./components/Types/Types";
import PostList from "./components/PostList/PostList";
import CustomButton from "./components/common/customButton";
import {getFakePosts} from "./services/fakePostService";

function App() {
    const [posts, setPosts] = useState<IPosts[]>([]);
    const [modal, setModal] = useState<boolean>(false);
    const [empty, setEmpty] =useState<boolean>(false)


    useEffect(()=>{
       async function loadPosts(){
            const posts = await getFakePosts();
            setPosts(posts);
        }
        loadPosts();
    },[]);

    const handleDelete=(id?:string)=>{
        setPosts(posts.filter(post=>post.id!==id));
    }
    const createPost =(newPost:IPosts) =>{
        if(newPost.body || newPost.title){
            setEmpty(false)
        setPosts(posts.concat({...newPost, id: posts.length+1+'.'}));
        setModal(false);}
        else {
            setEmpty(true);
        }
    }


    return (
    <div className="App">
            <CustomButton onClick={()=>setModal(true)} >
                Create Post
            </CustomButton>
      <ModalWindow visible={modal} setVisible={setModal}>
          <CreatPostForm create={createPost}/>
          {empty && <p style={{color: 'red'}}>Please fill Title And Description!</p>}
      </ModalWindow>
        <PostList posts={posts} onDelete={handleDelete}/>
    </div>
  );
}

export default App;

import React, {FC} from 'react';
import PostItem from "../PostItem/PostItem";
import {IPosts} from "../Types/Types";

interface PostListProps{
    posts: IPosts[];
    onDelete: (id?:string)=> void
}

const PostList:FC<PostListProps> = ({posts,onDelete}) => {
    return (
       <div>
           {posts.length ===0 ? <h3>No posts</h3>
               : posts.map((post=>{ return <PostItem post={post} key={post.id} onDelete={onDelete}/>})) }
       </div>
    );
};

export default PostList;

import React, {FC} from 'react';
import {IPosts} from "../Types/Types";
import cl from './postItem.module.css'
import CustomButton from "../common/customButton";

interface PostItemProps {
    post: IPosts
    onDelete:(id?:string)=> void
}

const PostItem: FC<PostItemProps> = ({post,onDelete}) => {
    return (
        <div className={cl.itemsWrapper}>
            <div className={cl.itemsTitle}>
                <h5>{post.id}</h5>
                <h4>{post.title}</h4>
                <CustomButton onClick={()=>onDelete(post.id)}>X</CustomButton>
            </div>
            <div>
                {post.body}
            </div>
        </div>
    );
};

export default PostItem;

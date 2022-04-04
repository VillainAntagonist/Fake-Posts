import React, {FC, useState} from 'react';
import FormInput from "./FormInput";
import {IPosts} from "../Types/Types";
import cl from './styles/formInput.module.css'
import CustomButton from "./customButton";

interface FormProps {
    create : (newPost:IPosts)=> void
}

const CreatPostForm:FC<FormProps> = ({create}) => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] =useState<string>('');
    const [className, setClassName] = useState<string>(cl.onBlur)

    const submitPost=(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        create({title,body})
        setTitle('');
        setBody('');
    }


    return (
        <form >
            <FormInput value={title} placeholder='Post Title'
                       onChange={event => setTitle(event.target.value)}
                        maxLength={16}
                       className={cl.onBlur}
                       Type={'input'}
            />
            <FormInput value={body} placeholder={'Post Description'}
                       className={className}
                       Type={'textarea'}
                       onChange={event => setBody(event.target.value)}
                       onFocus={()=>setClassName(cl.onFocus)}
                       onBlur={()=>setClassName(cl.onBlur)}
                       maxLength={200}
            />
            <CustomButton onClick={submitPost}>Add Post</CustomButton>
        </form>

    );
};

export default CreatPostForm;

import React, {FC,} from 'react';

interface IInput{
    value : string;
    Type: string;
    placeholder: string;
    className?: string;
    onChange : (event:React.ChangeEvent<HTMLTextAreaElement>)=> void;
    onFocus? : (event:React.FocusEvent<HTMLTextAreaElement>) =>void;
    onBlur? : (event:React.FocusEvent<HTMLTextAreaElement>) =>void;
    maxLength? : number;
}


const FormInput:FC<IInput> = ({value,Type, placeholder, onChange, onFocus,className,onBlur,maxLength}) => {
    return (
        <div>
            {React.createElement(Type, {value:value,
                className:className,
                placeholder:placeholder,
                onChange:onChange,
                onFocus:onFocus,
                onBlur:onBlur,
                maxLength:maxLength,
            })}
        </div>
    );
};

export default FormInput;

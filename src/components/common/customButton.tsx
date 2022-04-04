import React, {FC} from 'react';
import cl from './styles/CustomButton.module.css'

interface CustomButtonProps {
    onClick: (param:any) => void
}

const CustomButton:FC<CustomButtonProps> = ({children,onClick}) => {
    return (
       <button className={cl.btn} onClick={onClick} >
           {children}
       </button>
    );
};

export default CustomButton;

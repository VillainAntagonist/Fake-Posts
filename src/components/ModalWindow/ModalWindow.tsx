import React, {FC} from 'react';
import cl from './ModalWindow.module.css'

interface ModalWindowProps {
    visible : boolean;
    setVisible: any
}


const ModalWindow:FC<ModalWindowProps> = ({children,visible,setVisible}) => {

    const rootClasses = [cl.modalWindow];
    if(visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onDoubleClick={()=>setVisible(false)}>
            <div className={cl.modalWindowContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;

import React from 'react';
import { useNavigate } from "react-router-dom";
import IconReturn from '../svgs/IconReturn';

const LinkReturn = ({className ="", onlyIcon = false}) => {
    const navigate = useNavigate();
    return (
        <buttin 
        typy="button" 
        className={'link-return ' + className} 
        onClick={()=> navigate(-1)}
        >
            {
                (onlyIcon)
                ? <IconReturn/>
                : <>
                <IconReturn/>
                <span>Назад</span>
                </>
            }
        </buttin>
    )
}

export default LinkReturn
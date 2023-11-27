import React from 'react';
import { useNavigate } from "react-router-dom";
import IconReturn from '../svgs/IconReturn';

const LinkReturn = () => {
    const navigate = useNavigate();
    return (
        <buttin typy="button" className='link-return me-5' onClick={()=> navigate(-1)}>
            <IconReturn/>
            <span>Назад</span>
        </buttin>
    )
}

export default LinkReturn
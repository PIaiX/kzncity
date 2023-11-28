import React, { useState } from 'react';
import IconBookmark from '../svgs/IconBookmark';

const AddToBookmarks = () => {
    const [isAdded, setIsAdded] = useState(false);

    return (
        <button 
            type='button' 
            onClick={()=>setIsAdded(!isAdded)} 
            className={(isAdded) ? 'btn-saves active' : 'btn-saves'}
        >
            <IconBookmark/>
        </button>
    );
};

export default AddToBookmarks;
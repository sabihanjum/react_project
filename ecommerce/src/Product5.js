import React, { useContext } from 'react';
import { myContext } from './App';

export const Product5 = () => {
    const username = useContext(myContext);
    return (
    <div>
        <h1>I am some random component and using username {username}</h1>
    </div>
    );
};
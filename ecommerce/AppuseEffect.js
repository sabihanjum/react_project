import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const AppuseEffect = () => {
    const [count, setData] = useStae(1);
    useEffect(()=>{},[]){
        console.log("I am clicked")
    }
  return (
    <div>
        <h1>{count}</h1>

    </div>
  )
}

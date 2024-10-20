import React from 'react'
import { Greatgrandchild } from './Greatgrandchild'

export const Grandchild = () => {
  return (
    <div>
        <h3>Hi I am grandchild and my username is
        <p> {un} </p>
        </h3>
        <Greatgrandchild ue = {un} />
    </div>
  )
}

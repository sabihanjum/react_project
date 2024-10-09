import React from 'react'
import { Product4 } from './Product4'
export const Home4 = ({uname}) => {
return (
    <div>
        <h2> I am child comonent and username is
            {uname}
        </h2>
        <Product4 un = {uname} />
    </div>
    )
}
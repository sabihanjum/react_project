import React, { createContext, useState } from 'react'
import { Home1 } from './Home1'

export const context = createContext()// created an object of createContext with a variable context
export const App = () => {
  let [isUser] = useState('true')
  const [userName] = useState("Indira")
  return (
    <div>
      <h1> I am App Component and the userauthentication is {isUser} </h1>

       <context.Provider value = {userName} >
      <Home1 data = {isUser} />
      </context.Provider>
    </div>
  )
}
export default App;
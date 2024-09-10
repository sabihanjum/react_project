
// import React from 'react';
// import { Mycomponent1 } from './Components/Mycomponent1';
// import { Mycomponent2 } from './Components/Mycomponent2';

// function App() {
//   return (
//     <div>
//       <Mycomponent1 />
//       <Mycomponent2 />
//     </div>
    
//   );
// }

// export default App;

import React, { Component } from 'react'
import MyclassComponent1 from './Components/MyclassComponent1'
import './Components/style.css'

export default class App extends Component {
  stae = {
    subject: "AI/ML",
    section: "Section A"
  }
  render() {
    return (
      <div>
        <MyclassComponent1 section = {this.state.section} />
        <h2> I am teaching subject {this.state.subject}</h2>
      </div>
    )
  }
}


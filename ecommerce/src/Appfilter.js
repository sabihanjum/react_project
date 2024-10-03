import React from 'react';


const names = ['James', 'John', 'Paul', 'Ringo','George'];
function App() {
    return (
    <div>
        {names.filter(names.includes('J')).map(filteredName =>(
            <li key ={filteredName}>{filteredName}</li>
        ))}
    </div>
  );
}
export default App;

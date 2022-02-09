import './App.css';
import LearnFlex from './components/LearnFlex';
import React, { useState } from 'react';

function App() {

  const [showCard, setshowCard] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
       <h1> Learn Flex Properties </h1>
      </header>

      <main>
        <h1> This is demo to understand "flex" propery of flexbox</h1>
        <button onClick={() => setshowCard(!showCard)}>Show Card</button>
        {
          showCard && ( <LearnFlex />)
        }
       
      </main>
    </div>
  );
}

export default App;

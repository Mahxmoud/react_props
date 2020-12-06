import './App.css';
import React from 'react'
import { Profile } from './components/profile/Profile'
import myimg from './rick and mahmoud.jpg'

function App() {
  const handleName = name => {
     alert(name)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Profile name='Mahmoud Joma' bio={`Hello there, my name is Mahmoud and I am 24`} profission='Web Development' handleName={handleName}>{myimg}</Profile>
      </header>
    </div>
  );
}

export default App;

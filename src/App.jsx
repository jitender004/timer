
import { useState } from 'react';
import { Stopwatch } from './components/Stopwatch/Stopwatch';
import {Timer} from "./components/Timer/Timer"
import './App.css';

function App() {

  const [show , setShow] = useState(true);

  return (
    <div className="App">
       <button onClick={()=> {
       setShow(!show)
      }} className="sub-main">
        {show ? "Timer" : "Stopwatch"}
      </button>
      {show ? <div className='stopwatch'><Stopwatch /></div> : <div className='timer'><Timer /></div>}
     

      
      
    </div>
  );
}

export default App;

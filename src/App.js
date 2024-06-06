import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("");
  const [value, setValue] = useState("")

  return (
    <div className="App">
      <p>First React Test caseee</p>
      <input 
        type='text' 
        placeholder='Enter User Name' 
        id='userId' 
        name='username'
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <br/>
      <br/>
      <br/>
      <h1>Test Click Event with Button</h1>
      <button onClick={() => setValue("Updated Data")}>Update data</button>
      <h2>{value}</h2>
      <img title='React logo' src={logo} />
    </div>
  );
}

export default App;

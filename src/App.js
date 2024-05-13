import './App.css';
import React, { useState } from 'react';


function App() {
  const [word, setWord] = useState("");
  const [count, setCount] = useState(0);

  const getLenght = () => {
    setCount(word.length)
  }

  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3 mt-5">
            <h1 class="text-center mb-4">Count word</h1>
            <div class="form-group">
              <label for="nom">Word</label>
              <input type="text" class="form-control" id="nom" name="nom" value={word} onChange={e => setWord(e.target.value)} required />
            </div>
            <p>{count}</p>
            <button onClick={getLenght} class="btn btn-primary">Count</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

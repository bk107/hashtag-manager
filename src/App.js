import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [numberOfHashTags, setNumberOfHashTags] = useState(0)

  const handleChange = (evt) => {
    let hashtags = evt.target.value

    hashtags = hashtags.replace(" ", "");
    hashtags = hashtags.replace(new RegExp("\r?\n", "g"), ",");

    let hashtags_arr = hashtags.split("#");

    setNumberOfHashTags(hashtags_arr.length-1)
  }

  return (
    <div className="App">
      <textarea rows="20" onChange={handleChange} style={{ width: 500 }} />
      <p>
        Number of hashtags used: {numberOfHashTags} / 30
      </p>
    </div>
  );
}

export default App;

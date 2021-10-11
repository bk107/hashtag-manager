import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [hashtagsList, setHashtagsList] = useState([])

  const handleChange = (evt) => {
    let hashtags = evt.target.value

    hashtags = hashtags.trim()
    hashtags = hashtags.replace(" ", "");
    hashtags = hashtags.replace(new RegExp("\r?\n", "g"), "");

    let hashtags_arr = hashtags.split("#");
    hashtags_arr.shift()
    
    setHashtagsList(hashtags_arr)
  }

  return (
    <div className="App">
      <h1> Hashtag Manager </h1>
      <textarea rows="20" onChange={handleChange} style={{ width: 500 }} />
      <p>
        Number of hashtags: {hashtagsList.length} (of 30)
      </p>
      <div>

        {
          hashtagsList.length > 0 ?
            <> <h2>Hashtags </h2>
              {hashtagsList.map(hashtag => {
                return (
                  <div> {'#' + hashtag} </div>
                )
              })}
            </>
            : ""
        }
      </div>
    </div>
  );
}

export default App;

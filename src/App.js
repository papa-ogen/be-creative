import { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setStatus('*** loading ***');
    const response = await fetch(
        `https://api.chucknorris.io/jokes/random`
    );
    const data = await response.json();
    setData(data.value);
    setStatus('done');
};

  useEffect(() => {
      fetchData();
  }, []);

  const newJokeOnClick = () => {
    fetchData()
  }
  return (
    <div>
      <h1>Joke of the day [{status}]</h1>
      <p>{data}</p>
      <button onClick={newJokeOnClick}>New Joke</button>
    </div>
  );
}

export default App;

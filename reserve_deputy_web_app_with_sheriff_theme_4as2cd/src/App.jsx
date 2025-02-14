import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSearch = async () => {
    try {
      const result = await axios.post('/.netlify/functions/ask', { question: query });
      setResponse(result.data.answer);
      setQuery(''); // Clear the input box after sending the request
    } catch (error) {
      console.error('Error fetching the answer:', error);
      setResponse('Sorry, there was an error processing your request.');
    }
  };

  return (
    <div>
      <header>Reserve Deputy</header>
      <div className="container">
        <input
          type="text"
          placeholder="Ask a question about Alabama criminal law or SOP..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <div>
          <h3>Answer:</h3>
          <p>{response}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

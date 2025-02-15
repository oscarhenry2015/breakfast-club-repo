import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://breakfast-club-app.azurewebsites.net')
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
        setLoading(false);
      })
      .catch(() => setMessage('API call failed'));
  }, []);

  return (
    <div>
      <h1>Welcome to the Breakfast Club App</h1>
      {loading ? <p>Loading...</p> : <p>{message}</p>}
    </div>
  );
}

export default App;
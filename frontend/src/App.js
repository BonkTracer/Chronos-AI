import React from 'react';
import Anomalies from './components/Anomalies';
import WhaleActivity from './components/WhaleActivity';
import Predictions from './components/Predictions';

const App = () => {
  return (
    <div>
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Welcome to Sonar Whale AI</h1>
        <p>Monitor and Analyze Solana Token Activities in Real-Time</p>
      </header>
      
      <main style={{ padding: '20px' }}>
        <Anomalies />
        <WhaleActivity />
        <Predictions />
      </main>
    </div>
  );
};

export default App;

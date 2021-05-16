import React from 'react';
import ReactUseEffect from './ReactHooks/ReactUseEffect';
import ReactUseReducer from './ReactHooks/ReactUseReducer';
import FetchGithubData from './FetchData/FetchGithubData';

function App() {
  return (
    <div style={{ margin: '0 20px' }}>
      <h1>React Refresh</h1>
      <div>
        <h2>React useState And useEffect</h2>
        <ReactUseEffect />
        <h2>React useReducer</h2>
        <ReactUseReducer />
        <h3>Fetch Github Data | useEffect & Fetch</h3>
        <FetchGithubData />
      </div>
    </div>
  );
}

export default App;

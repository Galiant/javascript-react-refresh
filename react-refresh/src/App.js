import React from 'react';
import ReactUseEffect from './ReactHooks/ReactUseEffect';
import ReactUseReducer from './ReactHooks/ReactUseReducer';

function App() {
  return (
    <div style={{ margin: '0 20px' }}>
      <h1>React Refresh</h1>
      <div>
        <h2>React useState And useEffect</h2>
        <ReactUseEffect />
        <h2>React useReducer</h2>
        <ReactUseReducer />
      </div>
    </div>
  );
}

export default App;

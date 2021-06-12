import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import PostsPage from './pages/PostsPage';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={DashboardPage} />
          <Route exact path='/posts' component={PostsPage} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers/index';

import PostsIndex from './pages/posts_index';
import PostShow from './pages/posts_show';
import YouTube from './components_youtube_api/main';
import AddTagAndForm from './pages/add_tag_and_form';
import './style/style.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const App = () => (
  <Provider store={createStoreWithMiddleware(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() /* for redux chrome-extention */)}
  >
    <div>
      <header>
        <div className="container">Header</div>
      </header>

      <main className="container">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/posts/new" component={AddTagAndForm} />
              <Route path="/posts/page/:id" component={PostsIndex} />
              <Route path="/posts/:id" component={PostShow} />
              <Route path="/youtube" component={YouTube} />
              <Redirect from="/posts" to="/posts/page/1" />
              <Redirect from="/" to="/posts/page/1" />
            </Switch>
          </div>
        </BrowserRouter>
      </main>

    </div>
  </Provider>
);

export default App;

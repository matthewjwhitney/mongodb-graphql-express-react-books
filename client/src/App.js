import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Display from './components/Display';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import logo from './logo.svg';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient();

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path='/' component={Display} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
      </Router>
    </ApolloProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddCard from './pages/AddCard/AddCard';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/cards" component={Home} />
          <Route path="/addcard" component={AddCard} />
          {/* Other routes can go here */}
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;

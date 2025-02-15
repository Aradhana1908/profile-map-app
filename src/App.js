import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import ProfileDetails from './components/ProfileDetails';
import AdminPanel from './components/AdminPanel';
import './styles.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProfileList} />
        <Route path="/profile/:id" component={ProfileDetails} />
        <Route path="/admin" component={AdminPanel} />
      </Switch>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import DebitsPage from './components/DebitsPage';
import CreditsPage from './components/CreditsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/credits" component={CreditsPage} />
        <Route path="/debits" component={DebitsPage} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

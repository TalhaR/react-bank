import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import DebitsPage from './pages/DebitsPage';
import CreditsPage from './pages/CreditsPage';
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

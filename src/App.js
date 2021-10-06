import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Explore from './pages/Explore';
import Tabs from './components/tabs/Tabs'

function App() {
  return (
    <div className="md:hidden">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/explore' component={Explore} />
      </Switch>
      <Tabs />
    </div>
  );
}

export default App;

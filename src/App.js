import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Explore from './pages/Explore';
import Tabs from './components/tabs/Tabs'
import Activity from './pages/Activity';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import ExplorePost from './components/explore-post/ExplorePost';
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div className="md:hidden">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/explore' component={Explore} />
          <Route path='/activity' component={Activity} />
          <Route path='/profile' component={Profile} />
          <Route path='/editprofile' component={EditProfile} />
          <Route path='/explorepost' component={ExplorePost} />
        </Switch>
        <Tabs />
      </div>
      <div className="hidden md:block w-screan text-center font-bold text-xl">
        Sorry we are only on small screans <br />
        width should be less than 768px
      </div>
    </GlobalProvider>
  );
}

export default App;

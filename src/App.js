import './App.css';
import Home from './pages/Home';
import Tabs from './components/tabs/Tabs'

function App() {
  return (
    <div className="md:hidden">
      <Home />
      <Tabs />
    </div>
  );
}

export default App;

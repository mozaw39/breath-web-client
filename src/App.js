import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavigationDrawer from './Components/NavigationDrawer/NavigationDrawer';

function App() {
  return (
    <div className="App">
      <Router >
      <NavigationDrawer />
      </Router>
    </div>
  );
}

export default App;

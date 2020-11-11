import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavigationDrawer from "./Components/NavigationDrawer/NavigationDrawer";
import { UserContextProvider } from "./Context/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <NavigationDrawer />
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;

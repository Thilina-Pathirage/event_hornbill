import './App.css';
import Events from './Components/Pages/Events';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CreateNewEvent from './Components/Pages/CreateEventPage';
import Navbar from './Components/Elements/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
    <main>
    <Switch>
    <Route path={"/"} exact>
      <CreateNewEvent/>
    </Route>

    <Route path={"/events"} exact>
      <Events/>
    </Route>
  
    <Redirect to={"/"} />
    </Switch>
    </main>
  </Router>
  
  );
}
export default App;
import './App.css';
import Events from './Components/Pages/Events';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CreateNewEvent from './Components/Pages/CreateEventPage';
function App() {
  return (
    <Router>
    <main>
    <Switch>
    <Route path={"/"} exact>
      <CreateNewEvent/>
    </Route>

    <Route path={"/events"} exact>
      <Events ETitle={"Event Name"}/>
    </Route>
    
    <Redirect to={"/"} />
    </Switch>
    </main>
  </Router>
  );
}

export default App;

import './App.css';
import Events from './Components/Pages/Events';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CreateNewEvent from './Components/Pages/CreateEventPage';
import Navbar from './Components/Elements/Navbar';
import { MDBContainer } from 'mdb-react-ui-kit'

function App() {
  return (
    <Router>
      <MDBContainer>
        <Navbar />
        <main>
          <div className="blur-container">
            <Switch>
              <Route path={"/create"} exact>
                <CreateNewEvent />
              </Route>

              <Route path={"/"} exact>
                <Events />
              </Route>

              <Redirect to={"/"} />
            </Switch>
          </div>
        </main>
      </MDBContainer>
    </Router>

  );
}
export default App;
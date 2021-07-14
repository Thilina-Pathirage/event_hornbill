import './App.css';
import Events from './Components/Pages/Events';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CreateNewEvent from './Components/Pages/CreateEventPage';
import { MDBContainer } from 'mdb-react-ui-kit'
import Footer from './Components/Elements/Footer';

function App() {
  return (
    <Router>
      <MDBContainer>
        <main>
            <Switch>
              <Route path={"/create"} exact>
                <CreateNewEvent />
              </Route>

              <Route path={"/"} exact>
                <Events />
              </Route>

              <Redirect to={"/"} />
            </Switch>
        </main>
        <Footer />
      </MDBContainer>
    </Router>

  );
}
export default App;
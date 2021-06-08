import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";

// import components
import IntakeHeader from './components/IntakeFooter';
import IntakeFooter from './components/IntakeHeader';
import IntakeForm from './components/IntakeForm';



function App() {
  return (
    <div className="App">
      
        {/* <IntakeHeader/>  */}

        <Switch>
            {/* <Route exact path="/">
              <Landing/>
            </Route> */}

            <Route exact path="/intake">
              <IntakeForm/>
            </Route>

        
            {/* <Route path="/protected">
              <SelectSpecies/>
              <Sightings/>
            </Route> */}

        </Switch>

      <IntakeFooter/>
    </div>
  );
}

export default App;

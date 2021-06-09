import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

// import components
import IntakeFooter from './components/IntakeFooter';
import IntakeHeader from './components/IntakeHeader';
import IntakeForm from './components/IntakeForm';
import Welcome from './components/Welcome';

const initialUser = {
  name: "",
}

function App() {
  const [user, setUser] = useState(initialUser);

  return (
    <div className="App">
      
        <IntakeHeader/> 

        <Switch>

            <Route exact path="/">
              <IntakeForm setUser={setUser}/>
            </Route>
        
            <Route path="/welcome">
              <Welcome user={user}/>
            </Route>

        </Switch>

      <IntakeFooter/>
    </div>
  );
}

export default App;

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;

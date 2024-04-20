import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage';
import CoursePage from './pages/course page/coursepage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/quokkonnect' component={HomePage}></Route>
          <Route exact path='/innovation_and_sustainable_development_challenge' component={CoursePage}></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;

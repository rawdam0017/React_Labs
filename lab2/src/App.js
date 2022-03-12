import './App.css';

import MovieList from './components/MovieList';
import Favorites from './components/Favorites';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from "./components/NotFound";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='App'>
        <Switch>
          <Route path={"/"} exact component={MovieList} />
          <Route path={"/favorites"}  component={Favorites} />
          <Route path={"/Login"} component={Login} />
          <Route path={"/Register"} component={Register} />
          <Route path={"*"} component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

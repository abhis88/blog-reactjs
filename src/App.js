import Navbar from './components/navbar/NavBar';
import Home from './components/home/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './components/createBlog/CreateBlog';

function App() { 
    return (
      <Router>
        <div className="App">
            <Navbar />
            <div className='content'>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/create">
                  <CreateBlog />
                </Route>
              </Switch>
            </div>
        </div>
      </Router>
  );
}

export default App;

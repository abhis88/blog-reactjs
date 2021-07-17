import Navbar from './components/navbar/NavBar';
import Home from './components/home/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './components/createBlog/CreateBlog';
import BlogDetails from './components/blogDetails/BlogDetails';
import NotFound from './components/NotFound/NotFound';

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
                <Route path="/blogs/:id">
                  <BlogDetails />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
        </div>
      </Router>
  );
}

export default App;

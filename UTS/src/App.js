import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './container/All/Home';
import MesinCuciPost from './container/All/MesinCuciPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartPost from './container/All/CartPost';
import About from './container/All/About';
import {FaShoppingCart} from 'react-icons/fa';
 

function App() {
  return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/product'} className="nav-link"> Products </Link></li>
            <li><Link to={'/cart'} className="nav-link"><FaShoppingCart/></Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <br />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/product' component={MesinCuciPost} />
              <Route path='/cart' component={CartPost} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;

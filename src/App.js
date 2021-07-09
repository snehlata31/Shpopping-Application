import ProductScreen from './Screens/ProductScreen';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter, Route } from "react-router-dom";
import CartScreen from './Screens/CartScreen';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
const App = () => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              amazona
            </Link>
          </div>
          <div>
            <a href="cart.html">Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>)
              }
            </a>
            <a href="sighin.html">Sigh In</a>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All Right preserved</footer>
      </div>
    </BrowserRouter >
  );
}

export default App;

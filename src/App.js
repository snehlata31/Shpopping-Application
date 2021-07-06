import ProductScreen from './Screens/ProductScreen';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand">amazona</a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
            <a href="sighin.html">Sigh In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All Right preserved</footer>
      </div>
    </BrowserRouter >

  );
}

export default App;

import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Catagories from "./Components/Catagories/Catagories";
import Header from "./Components/Header/Header";
import ProDescrip from "./Components/ProductDescription/ProDescrip";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Cart />
        <Switch>
          <Route path="/product/:id">
            <ProDescrip />
          </Route>
          <HomeScreen />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

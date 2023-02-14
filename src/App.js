import PizzaBuilder from './components/PizzaBuilder';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

import Heading from './components/Heading';
import NavigationMenu from './components/NavigationMenu';
import Menu from './components/Menu';
import TopMenu from './components/TopMenu';
import NavBar from './components/NavBar';
import Orders from './components/Orders';

import background from "./backgroundPic.png";

import './App.css';


function App() {

  const API = "http://localhost:3000/pizzas";
  const API_T = "http://localhost:3000/toppings";

  const [pizzas, setPizzas] = useState([]);
  const [allToppings, setAllToppings] = useState([]);
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(p => setPizzas(p));
  },[])

  useEffect(() => {
    fetch(API_T)
    .then(r => r.json())
    .then(t => setAllToppings(t));
  },[])

  useEffect(() => {
    fetch('http://localhost:3000/orders')
    .then(r => r.json())
    .then(data => setOrders(data))

  }, [])

  return (
      <Switch>
        <div className="App" style={{ backgroundImage: `url(${background})`}}>
        <Heading/>
        <NavBar />
        <div className="spacer"></div>
        <Route path="/about">
          <NavigationMenu />
        </Route>
        <Route path="/options">
          <PizzaBuilder pizzas={pizzas} allToppings={allToppings} orders={orders} setOrders={setOrders}/>
        </Route>
        <Route path ="/orders">
          <Orders
          orders={orders}
          setOrders={setOrders}
          />
        </Route>
        <Route path="/menu">
          <TopMenu pizzas={pizzas} />
        </Route>
      </div>
      </Switch>
  );
}

export default App;

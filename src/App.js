import PizzaBuilder from './components/PizzaBuilder';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

import Heading from './components/Heading';
import NavigationMenu from './components/NavigationMenu';
import TopMenu from './components/TopMenu';
import NavBar from './components/NavBar';
import Orders from './components/Orders';
import Home from './components/Home';

import background from "./backgroundPic.png";

import './App.css';


function App() {

  const API = "http://localhost:3000/pizzas";
  const API_T = "http://localhost:3000/toppings";

  const [pizzas, setPizzas] = useState([]);
  const [allToppings, setAllToppings] = useState([]);
  const [orders, setOrders] = useState([])
  const [filters, setFilters] = useState({vegetarian: "all"})

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

  const filteredList = pizzas.filter(pizza => {
    return pizza.vegetarian === filters.vegetarian || filters.vegetarian === "all"
  })

  return (
      <Switch>
        <div className="App">
          <Heading/>
          <NavBar />
          <div className="spacer"></div>
          <Route path="/about">
            <NavigationMenu />
          </Route>
          <Route path="/options">
            <PizzaBuilder 
              pizzas={filteredList}
              allToppings={allToppings}
              setOrders={setOrders}
              filters={filters}
              setFilters={setFilters} />
          </Route>
          <Route path ="/orders">
            <Orders
              orders={orders}
              setOrders={setOrders} />
          </Route>
          <Route path="/menu">
            <TopMenu pizzas={filteredList} filters={filters} setFilters={setFilters} />
          </Route>
          <Route path="/home">
          <Home />
          </Route>
        </div>
      </Switch>
  );
}

export default App;

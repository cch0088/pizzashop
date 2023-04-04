import PizzaBuilder from './components/PizzaBuilder';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

import Heading from './components/Heading';
import Contact from './components/Contact';
import TopMenu from './components/TopMenu';
import NavBar from './components/NavBar';
import Orders from './components/Orders';
import Home from './components/Home';

import background from "./backgroundPic.png";

import './App.css';


function App() {

  const API = "https://my-json-server.typicode.com/cch0088/pizzashop/pizzas";
  const API_T = "https://my-json-server.typicode.com/cch0088/pizzashop/toppings";

  const [pizzas, setPizzas] = useState([]);
  const [allToppings, setAllToppings] = useState([]);
  const [orders, setOrders] = useState([])
  const [filters, setFilters] = useState({vegetarian: "all"})

  const [toppings, setToppings] = useState([]);
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

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
    fetch('https://my-json-server.typicode.com/cch0088/pizzashop/orders')
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
            <Contact />
          </Route>
          <Route path="/options">
            <PizzaBuilder 
              pizzas={filteredList}
              allToppings={allToppings}
              setOrders={setOrders}
              filters={filters}
              setFilters={setFilters}
              setToppings={setToppings}
              setType={setType}
              setImage={setImage}
              type={type}
              toppings={toppings} />
          </Route>
          <Route path ="/orders">
            <Orders
              orders={orders}
              setOrders={setOrders} />
          </Route>
          <Route path="/menu">
            <TopMenu
              pizzas={filteredList}
              filters={filters}
              setFilters={setFilters}
              setToppings={setToppings}
              setType={setType}
              setImage={setImage} 
              />
          </Route>
          <Route path="/home">
          <Home />
          </Route>
        </div>
      </Switch>
  );
}

export default App;

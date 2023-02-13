import './App.css';
import PizzaBuilder from './components/PizzaBuilder';
import { useEffect, useState } from 'react';
import background from "./backgroundPic.png";
import Heading from './components/Heading';
import NavigationMenu from './components/NavigationMenu';
import Menu from './components/Menu';
import Options from './components/Options';
import {createGlobalStyle} from 'styled-components';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, NavLink, Switch} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.App {
  text-align: center;
} 

#horz-list ul {
  margin: 50;
  padding: 0;
  list-style-type: none;
  text-align: center;
}

#horz-list ul li {
  display: inline;
  padding: 30px;
  color: white;
  font-weight: bold;
}


.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

body {
  background-color: black;
}

.pizza-display {
  width: 100%;
}

.content {
  min-height: 450px;
  background-color: lightblue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.lower-content {
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.spacer {
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.heading {
  height: 90px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.navigation {
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-color: white;
  border-style: solid;
  border-width: 2px;
}

.bottom {
  height: 70px;
  width: 100%;
}

.footer {
  height: 40px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.picture {
  height: 400px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.pizza-display {
  width: 100%;
}

.options {
  width: 150px;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 10px;
}

.menuNav {
  display: flex;
  justify-content: center;
  overflow: auto;
  width: 100%;
} 

`

function App() {

  const API = "http://localhost:3000/pizzas";

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(p => setPizzas(p));
  },[])

  return (
    <Switch>
    <div className="App" style={{ backgroundImage: `url(${background})`}}>
      <Route>
        <GlobalStyle />
      </Route>
      <Route>
          <Heading/>
      </Route>
      <Route>
          <NavBar />
      </Route>
      <Route>
          <NavigationMenu path="/navigationmenu"/>
      </Route>
      <div className="spacer"></div>
      <div className="content">
      <Route>
          <PizzaBuilder path="/pizzabuilder"/>
      </Route>
      <Route>
          <Options path="/options"/>
      </Route>
      </div>
      <Route>
          <Menu path="/menu"
          pizzas = {pizzas}
          setPizzas={setPizzas}
          />
        </Route>
        <div className="footer">Footer</div>  
        <div className="bottom"></div>
    </div>
  </Switch>
  );
}

export default App;

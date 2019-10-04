import React from 'react';
import './App.css';
import './sass/_main.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";

import {CartProvider} from './contexts/Card'
function Index() {
  return <h2>Home</h2>;
}
function App() {
  return (
    <Router>
      <CartProvider>
      <div className="App">
        <TopMenu />
        <Route path="/" exact component={Index} />
        <Route path="/products/" component={Products} />
      </div>
      </CartProvider>
    </Router>
  );
}

export default App;

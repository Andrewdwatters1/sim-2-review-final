import React, { Component } from 'react';
import './App.css';
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'
import {connect} from 'react-redux'
import {getProducts, getCart} from './ducks/reducer'
import {Switch, Route, Link} from 'react-router-dom'
 
class App extends Component {
  componentDidMount() {
    this.props.getProducts()
    this.props.getCart()
  }


  render() {   
    return (
      <div>
        <nav>
          <Link to='/'>Products</Link>
          <Link to='/cart'>Cart</Link>
        </nav>
        <Switch>
          <Route path='/cart' component={Cart} />
          <Route exact path='/' component={ProductsList} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, {getProducts, getCart})(App);

import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import { CartContext } from '../contexts/Card';
export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Tiki</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <div className="nav-link">
                  <Link to="/">Home</Link>
                  </div>
              </NavItem>
              <NavItem>
              <div className="nav-link">
                  <Link to="/products/">Products</Link>
                  </div>
              </NavItem>
              <NavItem>
              <div className="nav-link">
                <CartContext.Consumer>
                 {({cartItems}) => 
                  <Link to="/products/">Cart ({cartItems.length})</Link>
                } 

                </CartContext.Consumer>
                  </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

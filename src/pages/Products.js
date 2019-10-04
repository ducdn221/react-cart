import React, { Component } from "react";
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

import {CartContext} from '../contexts/Card';
import  './Products.scss';
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/products').then(res => {
        this.setState({
            products: res.data 
        });
    });
  }
  render() {
    const { products } = this.state;
    return (
      
       <section className="section-product">
         <Container>
        {/* <Row>
          {products.map((product,index) => (
            <Col sm="3" key={index}>
              <Card >
                <CardImg
                  top
                  width="100%"
                  src={product.imageUrl}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <CartContext.Consumer>
                    {({addToCart}) => (
                      <Button onClick ={ () => addToCart(product)}>
                      Add to cart
                    </Button> )}
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row> */}
        {/* <div className = "row">
        {products.map((product,index) => (
            <div className ="col-1-of-4" key={index}>
              <Card >
                <CardImg
                  top
                  width="100%"
                  src={product.imageUrl}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <CartContext.Consumer>
                    {({addToCart}) => (
                      <Button onClick ={ () => addToCart(product)}>
                      Add to cart
                    </Button> )}
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </div>
          ))}
        </div> */}
      </Container>
       <div className="row-custom">
        {/* <h2>Products</h2> */}

           <div className="col-1-of-4">
               <div className="box">
                  <div className="box__img">
                    <img className="box__product-img" src="https://salt.tikicdn.com/cache/200x200/ts/product/f5/19/db/2c6a4eb16a8343b3e6e63eb7a7a52093.jpg"/>
                  </div>

                  <div className="box__details">
                      <div className="box__content">
                        <p className="box__title">
                          <i className="box__icon-tikinow"></i>
                          Big data</p>
                        <p className="box__author">Bruce Schneier</p>
                        <p className="box__price">261.000đ</p>
                      </div>

                      <a href="" className= ""></a>
                  </div>

               </div>
           </div>
       </div>
     </section>
     /* <Button>Add to cart</Button> */
    );
  }
}

export default Products;

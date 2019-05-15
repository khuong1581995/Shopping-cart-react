import React from 'react'
import './App.css';
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import ip7 from './assets/images/Ip7.jpg'
import ip6 from './assets/images/ip6.png'
import samsung8 from './assets/images/samsung.jpg'






class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        { name: 'IP6 Plus', price: 40, image: ip7, description: 'San pham moi Apple', star: 4, id: 1, quantity: 0 },
        { name: 'IP7 Plus', price: 60, image: ip6, description: 'San pham Apple', star: 5, id: 2, quantity: 0 },
        { name: 'SamSung S8', price: 70, image: samsung8, description: 'San pham Sam SUng', star: 3, id: 3, quantity: 0 },

      ]
    };
  }


  rePrice(id) {
    const { products } = this.state
    const newProduct = products.map(item => { return item.id === id ? { ...item, quantity: item.quantity + 1 } : item })
    this.setState({ products: newProduct })
  }

  handleBuy(id, number) {
    const newProducts = this.state.products.map(item => { return item.id === id ? { ...item, quantity: item.quantity + number } : item })
    this.setState({
      products: newProducts
    })
  }
  deleteProduct(id) {
    const newProducts = this.state.products.map(item => { return item.id === id ? { ...item, quantity: 0 } : item })
    this.setState({
      products: newProducts
    })
  }
  render() {

    return (
      <div className="hidden-sn animated deep-purple-skin">

        <Header />
        <main id="mainContainer">
          <div className="container">
            <section className="section" >
              <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
              <div className="row">
                {this.state.products.map(item => <Content product={item}
                  rePrice={(id) => this.rePrice(id)}
                />)}

              </div>
            </section >
            <h3>
              <span className="badge amber darken-2">Mua Hàng Thành Công !</span>
            </h3>

            <Cart buyer={(id, number) => this.handleBuy(id, number)} products={this.state.products} deleteProduct={(id) => this.deleteProduct(id)} />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;

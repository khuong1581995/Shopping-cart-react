import React from 'react';

class Cart extends React.Component {

    handleNumber =(id,number)=> ()=>{
    this.props.buyer(id,number)
}

total(products){
    let total =0
    products.forEach(element => {
        total += element.price*element.quantity
    });
    return total
}
deleteProduct(id){
    this.props.deleteProduct(id)
}
  render() {
      const products = this.props.products
      const total = this.total(products)

    return (
    
            <section className="section">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Cộng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                products.map(item=> item.quantity? ( <tr>
                                    <th scope="row">
                                        <img src={item.image}
                                            alt="" className="img-fluid z-depth-0" />
                                    </th>
                                    <td>
                                        <h5>
                                            <strong>{item.name}</strong>
                                        </h5>
                                    </td>
                                    <td>{item.price}$</td>
                                    <td className="center-on-small-only">
                                        <span className="qty">{item.quantity} </span>
                                        <div className="btn-group radio-group" data-toggle="buttons">
                                            <label onClick={this.handleNumber(item.id,-1)} className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                                                <a  href="faq.html">-</a>
                                            </label>
                                            <label onClick={this.handleNumber(item.id,1)} className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                                                <a href="faq.html">+</a>
                                            </label>
                                        </div>
                                    </td>
                                    <td>{item.price*item.quantity}$</td>
                                    <td>
                                        <button onClick={()=>this.deleteProduct(item.id)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                                            title="" data-original-title="Remove item">
                                            X
                                        </button>
                                    </td>
                                </tr>):null
                               )
                                }
                            
                                <tr>
                                    <td colSpan="3"></td>
                                    <td>
                                        <h4>
                                            <strong>Tổng Tiền</strong>
                                        </h4>
                                    </td>
                                    <td>
                                        <h4>
                                            <strong>{total}$</strong>
                                        </h4>
                                    </td>
                                    <td colSpan="3">
                                        <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                            <i className="fa fa-angle-right right"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </section>
         
    );
  }
}

export default Cart;

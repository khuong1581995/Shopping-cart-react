import React from 'react';

class Content extends React.Component {

    addStar = (item) => {

        let stars = []

        for (let index = 0; index < item; index++) {
            stars.push(<li>
                <i className="fa fa-star"></i>
            </li>)

        }

        for (let index = 0; index < 5 - item; index++) {
            stars.push(<li>
                <i className="fa fa-star-o"></i>
            </li>)

        }

        return stars
    }
    rePrice(e, id) {
        e.preventDefault()
        this.props.rePrice(id)
    }

    render() {
        const { product } = this.props

        return (


            <div className="col-lg-4 col-md-6 mb-r" >
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}
                            className="img-fluid" alt="" />
                        <a href="faq.html">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="faq.html">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">

                            {this.addStar(product.star)}
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a onClick={(e) => this.rePrice(e, product.id)} href="faq.html" className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div >


        );
    }
}

export default Content;

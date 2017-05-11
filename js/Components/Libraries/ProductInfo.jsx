import React from 'react'
import AddToCartForm from './AddToCartForm.jsx'

class ProductInfo extends React.Component {
    render(){
        return <div className="product-info">
            <p className="title">
                <h2>{this.props.name}</h2>
                <span>({this.props.price} pln)</span>
            </p>
            <hr />
            <p className="description">
                {this.props.description}
            </p>
            <hr />
            <p className="add-to-cart">
                {
                    this.props.available ? <AddToCartForm
                    btnHandleClick={this.props.btnHandleClick}
                    gntHandleChange={this.props.gntHandleChange}
                    quantity={this.props.quantity} /> : <span className="unavailable">Product unavailable</span>
                }
            </p>
        </div>
    }
}

export default ProductInfo

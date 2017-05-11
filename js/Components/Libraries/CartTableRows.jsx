import React from 'react'

class CartTableRows extends React.Component {
    render() {
        return <tr>
                <td>
                    <img className="mini-photo" src={this.props.photo} alt="Zdjęcie"/>
                </td>

                <td>
                    <span className="name">
                        {this.props.name}
                    </span>
                    <span className="price">
                        {this.props.price} pln
                    </span>
                    <span className="quantity">
                        x {this.props.quantity}
                    </span>
                    <span className="productSum">
                        Summary: {this.props.productSum} pln
                    </span>
                    <button onClick={this.props.deleteButton} data-id={this.props.id} className="btn btn-info show-product-button delete-btn">
                        Delete
                    </button>
                </td>
            </tr>
    }
}

export default CartTableRows

import React from 'react'
import config from '../config.js'
import TableRows from './Libraries/TableRows.jsx'

class Products extends React.Component{
    constructor(){
        super()
        this.state = {
            products: [],
            toFind: ""
        }
    }

    componentDidMount() {
        fetch(config.apiUrl + "/products")
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                this.setState({
                    products: responseJson.products
                })
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    handleToFindChange = event => {
        this.setState({
            toFind: event.target.value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        this.search = true
        fetch(config.apiUrl + '/product/find/' + this.state.toFind)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                this.setState({
                    products: responseJson.products
                }, () => {
                    this.search = false;
                })
            })
    }

    render(){
        return <div className="row">
            <div className="col-md-12 col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
                    <div className="input-group">
                        <input type="text" className="form-control" onChange={this.handleToFindChange} placeholder="Search for..." />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="submit">Search</button>
                        </span>
                    </div>
                </form>
                <table className="table table-bordered table-hovered">
                    <tbody>
                    {
                        this.search ? null : this.state.products.map(element => {
                            return <TableRows
                                key={element.id}
                                id={element.id}
                                name={element.name}
                                price={element.price}
                                available={element.available}
                                photo={element.product_images[0].url}
                                description={element.description}
                                />
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    }
}

export default Products

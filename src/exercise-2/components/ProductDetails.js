import React, {Component} from 'react';
import DataList from "../mockups/data.json";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produtsList: DataList,
        }
    }

    render() {
        const id =  this.props.match.params.id
        const product = id === "1" ? (this.state.produtsList.bicycle): (id==="2"? this.state.produtsList.TV:this.state.produtsList.pencil)
        console.log(id)
        console.log(product)
        return (
            <div className="detail">
                <p className="productTitle">Product Details: </p>
                <p>Name:{product.name}</p>
                <p>Id:{product.id}</p>
                <p>Price:{product.price}</p>
                <p>Quantity:{product.quantity}</p>
                <p>Desc:{product.desc}</p>
                <p>URL:products/{product.id}</p>
            </div>
        )
    }


}

export default ProductDetails;
import React from 'react';
import Rating from './Rating ';
import { Link } from 'react-router-dom';
const Product = (props) => {
    console.log(props);
    const { product } = props;
    console.log("numrevies", product.numReviews);
    return (
        <div>
            <div key={product._id} className="card">
                <Link to={`/product/${product._id}`}>
                    <img className="medium" src={product.image} alt={product.name} />

                </Link>
                <div className="card-body">
                    <Link to={`/product/${product._id}`}>
                        <h2>{product.name}</h2>

                    </Link>
                    <Rating rating={product.rating}
                        numReviews={product.numReviews}>
                    </Rating>
                    <div className="price">{product.price}</div>
                </div>
            </div>
        </div >
    );
}
export default Product;
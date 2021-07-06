import React from 'react';
import Rating from './Rating ';
const Product = (props) => {
    console.log(props);
    const { product } = props;
    return (
        <div>
            <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                    <img src={product.image} className="medium" alt={product.name} />
                </a>
                <div className="card-body">
                    <a href={`/product/${product._id}`}>
                        <h2>{product.name}</h2></a>
                    <Rating rating={product.rating}
                        numReviews={product.numReviews}>
                    </Rating>
                    <div className="price">{product.price}</div>
                </div>
            </div>
        </div>
    );
}

export default Product;
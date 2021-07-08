import React, { useEffect } from 'react';
import Rating from '../components/Rating ';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../Actions/ProductActions';
const ProductScreen = (props) => {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    console.log(productId)
    const productDetails = useSelector(state => state.productDetails);
    console.log(productDetails);
    const { product } = productDetails;
    console.log("product", product);
    useEffect(() => {
        console.log("useeffect");
        dispatch(detailsProduct(productId));
    }, [dispatch, productId])
    return (
        <div>
            <div>
                <Link to="/">Back To Result</Link>
                <div className="row top">
                    <div className="col-2">
                        <img className="large" src={product.image} alt={product.name}></img>
                    </div>
                    <div className="col-1">
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                            <li>
                                <Rating rating={product.rating} numReview={product.numReviews}>
                                </Rating>
                            </li>
                            <li>Price:${product.price}</li>
                            <li>Description:${product.description}</li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div className="price">${product.price}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>status</div>
                                        <div >
                                            {product.countInStock > 0 ? (<span className="success">In stock</span>) : (<span className="error">Unavailable</span>)}
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <button className="primary block">Add to Cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default ProductScreen;
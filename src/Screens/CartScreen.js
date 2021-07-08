import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addToCart from '../Actions/CartAction';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
export default function CartScreen(props) {



    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    console.log(cartItems);
    const productId = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    const removeFromcartHandler = (id) => {
        //delete action
    }
    return (
        <div>
            <div className="row top">
                <div className="col-2">
                    <h1>Shopping Cart</h1>
                    {
                        cartItems.length === 0 ?
                            <MessageBox>cart Is empty :
                                <link to="/">Go Shopping</link>
                            </MessageBox> :
                            (<ul>
                                {cartItems.map((item) => {
                                    return (
                                        <div className="row">
                                            <div>
                                                <img src={item.image}
                                                    alt={item.name}
                                                    className="small"
                                                ></img>
                                            </div>
                                            <div className="min-30">
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </div>

                                            <div>
                                                <select value={item.qty}
                                                    onChange={e => dispatch(addToCart(item.product),
                                                        Number(e.target.value))}></select>
                                                {[...Array(item.product.countInStock).keys()].map(
                                                    (x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    )
                                                )}

                                            </div>
                                            <div>
                                                {item.price}
                                            </div>

                                            <div>
                                                <button onClick={() => removeFromcartHandler(item.product)}>delete</button>
                                            </div>
                                        </div>
                                    )
                                })
                                }

                            </ul>
                            )
                    }
                </div>
                <div>

                </div>
            </div>
        </div >
    );
}


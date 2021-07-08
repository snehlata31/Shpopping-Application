import React, { useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../Actions/ProductActions';
const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    console.log(products)
    return (
        <div>
            {loading ? (<LoadingBox ></LoadingBox>) : error ? (<MessageBox variant="danger">{error}</MessageBox>)
                : (<div className="row center">
                    {products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))
                    }
                </div>)}
        </div>
    );
}
export default HomeScreen;
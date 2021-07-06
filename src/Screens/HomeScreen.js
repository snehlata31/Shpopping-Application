import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
const HomeScreen = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get('/api/products/sss');
                setLoading(false);
                setProducts(data);
            }
            catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }

        fetchData();
    }, []);
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
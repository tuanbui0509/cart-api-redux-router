import React, { Component } from 'react'
import ProductList from '../../components/ProductList/ProductList'
import ProductItem from '../../components/ProductItem/ProductItem'
import { connect } from 'react-redux'
import callApi from './../../utils/apiCaller'
import { Link } from 'react-router-dom'
// import axios from 'axios'
class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        callApi('product', 'GET', null).then(res => {
            this.setState({
                products: res.data
            });
        });
        // axios({
        //     url: 'http://localhost:3000/product',
        //     method: 'GET',
        //     data: null
        // }).then(res => {
        //     console.log(res);
        //     this.setState({
        //         products: res.data
        //     })
        // }).catch(err => {
        //     console.log(err);
        // })
    }

    render() {
        let { products } = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info mb-1">Thêm sản phẩm</Link>
                <ProductList>{this.showProducts(products)}</ProductList>
            </div>
        )
    }
    showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                    />
                );
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductListPage);
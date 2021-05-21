import { React, Fragment } from "react";
import Menu from './components/Menu/Menu'
import ProductList from './components/ProductList/ProductList'
function App() {
    return (
        <Fragment>
            <Menu />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-info mb-1">Thêm sản phẩm</button>
                        <ProductList/>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default App;

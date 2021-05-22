import React, { Component } from 'react'
import '../ProductActionPage/style.css'
export default class ProductActionPage extends Component {
    render() {
        return (
            <div className="container registration">
                <div className="registration-form">
                    <form>
                        <div className="form-icon">
                            <span><i className="icon icon-screen-smartphone" /></span>
                        </div>
                        <h4>Tên sản phẩm</h4>
                        <div className="form-group">
                            <input type="text" className="form-control item" id="name" placeholder="Nhập tên" />
                        </div>
                        <h4>Giá tiền</h4>
                        <div className="form-group">
                            <input type="number" className="form-control item" id="price" placeholder="Nhập tiền" />
                        </div>
                        <h4>Trạng thái</h4>
                        <div className="form-group ">
                            <label for="status" className="mr2">Còn hàng: </label>
                            <input type="checkbox" id="status" />
                        </div>

                        <div className="form-group">
                            <button type="button" className="btn btn-block create-account">Thêm sản phẩm</button>
                        </div>
                    </form>
                    <div className="social-media">

                    </div>
                </div>
            </div>
        )
    }
}
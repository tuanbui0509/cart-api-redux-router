import React, { Component } from 'react'
import ProductItem from '../ProductItem/ProductItem'

export default class ProductList extends Component {
    render() {
        return (
            <div className="card border-primary bg-light mb-3">
                <h4 className="card-header">Danh sách sản phẩm</h4>
                <div className="card-body text-primary">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th >STT</th>
                                <th >Mã SP</th>
                                <th >Tên</th>
                                <th >Giá</th>
                                <th >Trạng thái</th>
                                <th >Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.props.children}
                        </tbody>
                    </table>

                </div>
            </div>

        )
    }
}

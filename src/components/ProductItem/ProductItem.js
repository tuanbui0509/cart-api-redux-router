import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { product, index } = this.props;
        let statusName = product.status ? 'còn hàng' : 'hết hàng';
        let statusClass = product.status ? 'success' : 'default';
        return (
            <tr>
                <th >index+1</th>
                <th >product.id</th>
                <th >product.name</th>
                <th >product.price</th>
                <th ><span className={`badge badge-${statusClass} p-1`}>Còn hàng</span></th>
                <th ><div>
                    <button type="button" className="btn btn-success mr-2">Sửa</button>
                    <button type="button" className="btn btn-danger">Xóa</button>
                </div>
                </th>
            </tr>
        )
    }
}

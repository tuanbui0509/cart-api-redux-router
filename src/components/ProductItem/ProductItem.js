import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <tr>
                <th >1</th>
                <th >1</th>
                <th >Iphone </th>
                <th >1000000</th>
                <th ><span className="badge badge-success p-1">Còn hàng</span></th>
                <th ><div>
                    <button type="button" className="btn btn-success mr-2">Sửa</button>
                    <button type="button" className="btn btn-danger">Xóa</button>
                </div>
                </th>
            </tr>
        )
    }
}

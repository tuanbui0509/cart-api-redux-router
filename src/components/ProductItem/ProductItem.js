import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ProductItem extends Component {
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa hay không?')) {//eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        let { product, index } = this.props;
        let statusName = product.status ? 'còn hàng' : 'hết hàng';
        let statusClass = product.status ? 'success' : 'danger';
        return (
            <tr>
                <th >{index + 1}</th>
                <th >{product.id}</th>
                <th >{product.name}</th>
                <th >{product.price}</th>
                <th ><span className={`badge badge-${statusClass} p-1`}>{statusName}</span></th>
                <th ><div>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-success mr-2"
                    >Sửa</Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)} >
                        Xóa</button>
                </div>
                </th>
            </tr>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import callApi from '../../utils/apiCaller';
import '../ProductActionPage/style.css'
export default class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            id: '',
            txtName: '',
            txtPrice: '',
            chbStatus: ''
        })
    }

    componentDidMount() {
        //lấy params để thực hiện
        let { match } = this.props;
        // console.log(match);
        if (match) {
            let id = match.params.id;
            // console.log(id);
            callApi(`product/${id}`, 'GET', null).then(res => {
                let data = res.data;
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chbStatus: data.status
                })
            })
        }
        
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        e.preventDefault();
        let { id, txtName, txtPrice, chbStatus } = this.state;
        let { history } = this.props;
        if (id) {//update
            callApi(`product/${id}`, 'PUT', {
                name: txtName,
                price: txtPrice,
                status: chbStatus
            }).then(res => {
                // console.log(res);
                history.goBack()
                // history.push('/');
            })
        }
        else {
            callApi('product', 'POST', {
                name: txtName,
                price: txtPrice,
                status: chbStatus
            }).then(res => {
                // console.log(res);
                history.goBack()
                // history.push('/');
            })
        }
    }

    render() {
        let { id,txtName, txtPrice, chbStatus } = this.state;
        return (
            <div className="container registration">
                <div className="registration-form">
                    <form onSubmit={this.onSave}>
                        <div className="form-icon">
                            <span><i className="icon icon-screen-smartphone" /></span>
                        </div>
                        <h4>Tên sản phẩm</h4>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control item"
                                name="txtName" id="name"
                                placeholder="Nhập tên"
                                value={txtName}
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        <h4>Giá tiền</h4>
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control item"
                                id="price" name="txtPrice"
                                placeholder="Nhập tiền"
                                value={txtPrice}
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        <h4>Trạng thái</h4>
                        <div className="form-group ">
                            <label className="mr2">Còn hàng: </label>
                            <input
                                type="checkbox"
                                id="status"
                                name="chbStatus"
                                value={chbStatus}
                                checked={chbStatus}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-block create-account">{id?'Cập nhật sản phẩm':'Thêm sản phẩm'}</button>
                        </div>
                        <div className="form-group">
                            <Link to="/product-list" className="btn btn-block create-back">Trở lại</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
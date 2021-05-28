import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions';
import '../ProductActionPage/style.css'
import { connect } from 'react-redux'
class ProductActionPage extends Component {
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
        if (match) {
            let id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            let { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chbStatus: itemEditing.status
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
        let product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chbStatus
        }
        console.log(product);
        if (id) {//update
            this.props.onUpdateProduct(product);
            history.goBack()
        }
        else {
            this.props.onAddProduct(product);
            history.goBack();
        }
    }

    render() {
        let { id, txtName, txtPrice, chbStatus } = this.state;
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
                            <button type="submit" className="btn btn-block create-account">{id ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}</button>
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

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                {/* Brand/logo */}
                <a className="navbar-brand" href="/#">Call API</a>
                {/* Links */}
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/#">Trang chủ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Sản phẩm</a>
                    </li>

                </ul>
            </nav>
        );
    }
}

export default Menu;

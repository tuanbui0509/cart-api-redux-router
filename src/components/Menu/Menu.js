import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

const menus = [
    {
        label: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        label: 'Quản lý sản phẩm',
        to: '/product-list',
        exact: false
    }
]
// custom Link
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? 'active' : '';
                return (
                    <li className={`nav-item ${active}`}>
                        <Link
                            className="nav-link"
                            to={to} >
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    );
}
class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                {/* Brand/logo */}
                <a className="navbar-brand" href="/#">Call API</a>
                {/* Links */}
                <ul className="navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }

    showMenus = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.label}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            })
        }
        return result;
    }
}

export default Menu;

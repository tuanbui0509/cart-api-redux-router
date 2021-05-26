import React, { Component } from "react";
import Menu from './components/Menu/Menu'
import routes from './routes'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Menu />
                <div className="container mt-5">
                    <div className="row">

                        {this.showContentMenus(routes)}
                    </div>
                </div>
            </Router>
        )
    }
    showContentMenus = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            })
        }
        return <Switch>{result}</Switch>
    }
}

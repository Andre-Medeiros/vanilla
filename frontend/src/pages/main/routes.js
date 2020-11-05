import React, {Component} from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Login from '../Login';
import Home from '../main/Home';


export class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/home" component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
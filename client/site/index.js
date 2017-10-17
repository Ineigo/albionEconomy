import Tabs from 'tabs';
import Menu from './menu';
import style from './index.scss';
import Dashboard from './dashboard';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenuItem: 'id2',
        };
    }

    _onClickMenuItem = item => {
        this.setState({ activeMenuItem: item.to });
        console.log('click');
    };

    menuItems = [
        {
            title: 'Домены',
            icon: '1',
            items: [{ to: 'id1', title: 'Регистрация доменов' }, { to: 'id2', title: 'Персоны' }],
        },
    ];

    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.page}>
                    <Menu items={this.menuItems} onClick={this._onClickMenuItem} active={this.state.activeMenuItem} />
                    <div>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/:page" render={props => <h3>Render page: {props.match.params.page} </h3>} />
                    </div>
                </div>
            </div>
        );
    }

    _submitForm = e => {
        e.preventDefault();
        console.log(this.state);
        // Todo: Sending data)));
    };

    _onKeyup = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
}

const All = () => (
    <div>
        <h2>All</h2>
    </div>
);

ReactDOM.render(
    <HashRouter>
        <Root />
    </HashRouter>,
    document.getElementById('root')
);

import Tabs from './tabs';
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
            activeTab: 'resource',
            activeMenuItem: 'id2',
        };
    }
    tabs = [{ name: 'resource', title: 'Ресурсы' }, { name: 'resource2', title: 'Ресурсы2' }];

    _onClickTab = tab => {
        this.setState({ activeTab: tab.name });
    };
    _onClickMenuItem = item => {
        this.setState({ activeMenuItem: item.to });
        console.log('click');
    };

    menuItems = [
        { to: 'id1', title: 'Дерево' },
        { to: 'id2', title: 'Брусья' },
        { to: 'id3', title: 'Камни' },
        { to: 'id4', title: 'Еще что-то' },
        { to: 'id5', title: '...' },
    ];

    render() {
        return (
            <div className={style.wrapper}>
                <h3>Калькулятор Albion Economy</h3>
                <Tabs items={this.tabs} onClick={this._onClickTab} active={this.state.activeTab} />
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

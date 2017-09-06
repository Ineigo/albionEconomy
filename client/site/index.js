import Tabs from './tabs';
import Menu from './menu';
import style from './index.scss';

import React from 'react';
import ReactDOM from 'react-dom'

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'resource',
            activeMenuItem: 'id2'
        };
    }
    tabs = [
        { name: 'resource', title: 'Ресурсы' },
        { name: 'resource2', title: 'Ресурсы2' }
    ];

    _onClickTab = tab => {
        this.setState({ activeTab: tab.name });
    };
    _onClickMenuItem = item => {
        this.setState({ activeMenuItem: item.name });
    }

    menuItems = [
        { name: 'id1', title: 'Дерево' },
        { name: 'id2', title: 'Брусья' },
        { name: 'id3', title: 'Камни' },
        { name: 'id4', title: 'Еще что-то' },
        { name: 'id5', title: '...' }
    ]

    render() {
        return <div className={style.wrapper}>
            <h3>Калькулятор Albion Economy</h3>
            <Tabs items={this.tabs} onClick={this._onClickTab} active={this.state.activeTab}/>
            <div className={style.page}>
                <Menu items={this.menuItems} onClick={this._onClickMenuItem} active={this.state.activeMenuItem} />
            </div>
        </div>;
    }

    _submitForm = e => {
        e.preventDefault();
        console.log(this.state);
        // Todo: Sending data)));
    }

    _onKeyup = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

}

ReactDOM.render(<Root />, document.getElementById('root'));
import style from './Tabs.scss';
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Tabs extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        onClick: PropTypes.func.isRequired,
        active: PropTypes.string,
        options: PropTypes.object,
    };

    defaultOptions = {
        classNames: {},
    };

    constructor(props) {
        super(props);

        this.options = Object.assign(this.defaultOptions, props.options);
        this.classNames = this.options.classNames;
        if (!props.active) {
            this.state = {
                active: props.items[0].name,
            };
        }
    }

    render() {
        return (
            <nav className={this.classNames.tabs || style.tabs}>
                {this.props.items.map(itm => this._createTab(itm))}
            </nav>
        );
    }

    _createTab(tab) {
        const isActive = this._isActive(tab);
        const classNameTab = classNames(
            { [tab.class]: tab.class },
            this.classNames.tab || style.tab,
            { [style.active]: isActive && !this.classNames.active },
            { [this.classNames.active]: isActive }
        );
        return (
            <div key={tab.name} className={classNameTab} onClick={e => this._onClick(tab, e)}>
                <span className={this.classNames.title || style.title}>{tab.title}</span>
            </div>
        );
    }

    _isActive(tab) {
        const active = this.props.active || this.state.active;
        return active === tab.name;
    }

    _onClick(tab, e) {
        if (!this.props.active) {
            this.setState({
                active: tab.name,
            });
        }
        this.props.onClick(tab, e);
    }
}

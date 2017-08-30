import React, { Component } from 'react';
import style from './Menu.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Menu extends Component {
    static propTypes = {
        orientation: PropTypes.string,
        items: PropTypes.array.isRequired,
        onClick: PropTypes.func.isRequired,
        active: PropTypes.string
    }
    static defaultProps = {
        orientation: 'vertical', // или horisontal
        active: ''
    }

    render() {
        return (<nav className={classNames(style.wrapper, style[`type-${this.props.orientation}`])}>
            {this.props.items.map(item => this.createItem(item))}
        </nav>);
    }

    createItem(item) {
        const classItem = classNames(style.item, { [style.active]: this.props.active === item.name });
        return <div className={classItem} key={item.name} onClick={e => this.props.onClick(item, e)}>{item.title}</div>;
    }
}
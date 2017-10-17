import React, { Component } from 'react';
import style from './Menu.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
        const classItem = classNames(style.item, { [style.active]: this.props.active === item.to });
        return <div className={classItem} key={item.to} onClick={e => this.props.onClick(item, e)}>
            <Link to={item.to}>{item.title}</Link>
        </div>;
    }
}
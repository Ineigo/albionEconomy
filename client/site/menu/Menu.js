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
        active: PropTypes.string,
    };
    static defaultProps = {
        orientation: 'vertical', // или horisontal
        active: '',
    };
    constructor(props) {
        super(props);
        this.state = {
            category: '',
        };
    }

    render() {
        return (
            <nav
                className={classNames(style.wrapper, style[`type-${this.props.orientation}`], {
                    [style.active]: this.state.items && this.state.items.length,
                })}
            >
                <div className={style.categories}>{this.props.items.map(this.createCategory)}</div>
                {this.state.category ? (
                    <div className={style.items}>{this.state.items.map(this.createItemLink)}</div>
                ) : (
                    ''
                )}
            </nav>
        );
    }

    createCategory = category => {
        const className = classNames(style.category, { [style.active]: category.title === this.state.category });
        return (
            <div key={category.title} className={className} onClick={() => this.onClickCategory(category)}>
                {category.icon} <span>{category.title}</span>
            </div>
        );
    };

    onClickCategory(category) {
        this.setState({
            category: category.title,
            items: category.items,
        });
    }

    createItemLink = item => {
        const classItem = classNames(style.item, { [style.active]: this.props.active === item.to });
        return (
            <div className={classItem} key={item.to} onClick={e => this.props.onClick(item, e)}>
                <Link to={item.to}>{item.title}</Link>
            </div>
        );
    };
}

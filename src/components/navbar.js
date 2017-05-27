import React from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    menuList: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node.isRequired,
      onClick: PropTypes.func.isRequired,
      position: PropTypes.oneOf(['left', 'right'])
    })),
    className: PropTypes.string
  }

  render() {

    const { title, menuList, className } = this.props;

    return (
      <div className={`navbar ${className || ''}`}>
        <div className="container">
          {title}
          <nav className="pull-left">
            <ul className="list list--inline list--without-margin">
              {menuList && menuList.filter(m => m.position != 'right').map((m, i) =>
                <li key={i}>
                  <a className="navbar__link" onClick={m.onClick}>{m.label}</a>
                </li>
              )}
            </ul>
          </nav>
          <nav className="pull-right">
            <ul className="list list--inline list--without-margin">
              {menuList && menuList.filter(m => m.position == 'right').map((m, i) =>
                <li key={i}>
                  <a className="navbar__link" onClick={m.onClick}>{m.label}</a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    );

  }

}

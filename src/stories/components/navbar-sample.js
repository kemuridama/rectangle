import React from 'react';

import Navbar from '../../components/navbar';

export default class NavbarSample extends React.Component {

  render() {

    const { onClick } = this.props;

    const menuList = [
      {
        label: 'Home',
        onClick: onClick.bind(this),
        position: 'left'
      },
      {
        label: 'Menu 1',
        onClick: onClick.bind(this),
        position: 'left'
      },
      {
        label: 'Menu 2',
        onClick: onClick.bind(this),
        position: 'left'
      },
      {
        component: <a className="navbar__link" onClick={onClick.bind(this)}>
          <i className="fa fa-flag fa-fw" /> with Component
        </a>,
        position: 'left'
      },
      {
        label: 'Login',
        onClick: onClick.bind(this),
        position: 'right'
      }
    ];

    return (
      <div className="con">
        <Navbar
          title={this.renderTitle()}
          menuList={menuList}
        />
      </div>
    );

  }

  renderTitle() {
    return (
      <a className="navbar__link navbar__link--title" onClick={this.props.onClick.bind(this)}>Test</a>
    );
  }

}

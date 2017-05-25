import React from 'react';
import PropTypes from 'prop-types';

export default class Loading extends React.Component {

  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    message: PropTypes.string
  }

  render() {

    const { isActive, message } = this.props;

    if (!isActive) return null;
    return(
      <div className="loading">
        <p className="loading__message">
          <i className="loading__message__icon fa fa-spinner fa-pulse fa-fw" /><br />
          {message || 'Now Loading'}
        </p>
      </div>
    );

  }

}

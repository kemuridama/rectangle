import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

export default class Modal extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {

    const {
      name,
      isOpen,
      onClose,
      children,
      className
    } = this.props;

    return (
      <ReactModal
        contentLabel={name}
        isOpen={isOpen}
        onRequestClose={onClose.bind(this)}
        className={`modal ${className || ''}`}
        overlayClassName={'modal-overlay'}
        bodyOpenClassName={'disable-scroll'}
      >
        {children}
      </ReactModal>
    );

  }

}

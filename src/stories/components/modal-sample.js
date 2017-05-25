import React from 'react';
import Modal from '../../components/modal';

export default class ModalSample extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpen: false
    };
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="container">
        <Modal name="test" className="col-md-6" isOpen={isOpen} onClose={this.handleClose.bind(this)}>
          <h3 className="modal__header">Modal</h3>
          <div className="modal__body">
            <p>
              This is modal body. This is modal body. This is modal body.<br />
              This is modal body. This is modal body. This is modal body.
            </p>
          </div>
        </Modal>
        <div className="p">
          <div className="p__body">
            <button className="btn btn-blue" onClick={this.handleOpen.bind(this)}>Open</button>
          </div>
        </div>
      </div>
    );
  }

  handleOpen() {
    this.setState({ isOpen: true });
  }

  handleClose() {
    this.setState({ isOpen: false });
  }

}

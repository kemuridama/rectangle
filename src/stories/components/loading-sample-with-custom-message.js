import React from 'react';
import Loading from '../../components/loading';

export default class LoadingSampleWithCustomMessage extends React.Component {

  constructor(props, context) {
    super(props.context);
    this.state = {
      isActive: false
    }
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className="con">
        <Loading isActive={isActive} message={'Loading Custom Message'} />
        <div className="p">
          <div className="p__body">
            <button className="btn btn-blue" onClick={this.handleClick.bind(this)}>Load</button>
          </div>
        </div>
      </div>
    );
  }

  handleClick() {
    this.setState({ isActive: true });
    setTimeout(() => {
      this.setState({ isActive: false });
    }, 3000);
  }

}

import React from 'react';

export default class NormalButton extends React.Component {

  render() {
    const { onClick } = this.props;
    return (
      <div className="container">
        <div className="p">
          <div className="p__body">
            <button className="btn" onClick={onClick.bind(this)}>Button</button>
            <button className="btn" onClick={onClick.bind(this)}>Button</button>
            <button className="btn" onClick={onClick.bind(this)}>Button</button>
          </div>
        </div>
      </div>
    );
  }

}

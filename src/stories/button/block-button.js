import React from 'react';

export default class BlockButton extends React.Component {

  render() {
    const { onClick } = this.props;
    return (
      <div className="container">
        <div className="p">
          <div className="p__body">
            <button className="btn btn--block" onClick={onClick.bind(this)}>Button</button>
            <button className="btn btn--block" onClick={onClick.bind(this)}>Button</button>
            <button className="btn btn--block" onClick={onClick.bind(this)}>Button</button>
          </div>
        </div>
      </div>
    );
  }

}

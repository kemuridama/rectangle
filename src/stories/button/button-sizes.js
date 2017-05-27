import React from 'react';

export default class ButtonSizes extends React.Component {

  render() {
    const { onClick } = this.props;
    return (
      <div className="con">
        <div className="p">
          <div className="p__body">
            <button className="btn btn--large" onClick={onClick.bind(this)}>Large</button>
            <button className="btn" onClick={onClick.bind(this)}>Normal</button>
            <button className="btn btn--small" onClick={onClick.bind(this)}>Small</button>
          </div>
        </div>
      </div>
    );
  }

}

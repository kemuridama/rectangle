import React from 'react';

export default class ButtonOutlineColors extends React.Component {

  render() {
    const { onClick } = this.props;
    return (
      <div className="container">
        <div className="p">
          <div className="p__body">
            <button className="btn btn--red-o" onClick={onClick.bind(this)}>Red</button>
            <button className="btn btn--blue-o" onClick={onClick.bind(this)}>Blue</button>
            <button className="btn btn--green-o" onClick={onClick.bind(this)}>Green</button>
            <button className="btn btn--yellow-o" onClick={onClick.bind(this)}>Yellow</button>
            <button className="btn btn--orange-o" onClick={onClick.bind(this)}>Orange</button>
          </div>
        </div>
      </div>
    );
  }

}

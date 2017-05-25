import React from 'react';

export default class ButtonColors extends React.Component {

  render() {
    const { onClick } = this.props;
    return (
      <div className="container">
        <div className="p">
          <div className="p__body">
            <button className="btn btn--red" onClick={onClick.bind(this)}>Red</button>
            <button className="btn btn--blue" onClick={onClick.bind(this)}>Blue</button>
            <button className="btn btn--green" onClick={onClick.bind(this)}>Green</button>
            <button className="btn btn--yellow" onClick={onClick.bind(this)}>Yellow</button>
            <button className="btn btn--orange" onClick={onClick.bind(this)}>Orange</button>
          </div>
        </div>
      </div>
    );
  }

}

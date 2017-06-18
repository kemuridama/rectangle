import React from 'react';

export default class LabelColors extends React.Component {

  render() {
    return (
      <div className="con">
        <div className="p">
          <div className="p__body">
            <span className="lbl lbl--red">Red</span>
            <span className="lbl lbl--blue">Blue</span>
            <span className="lbl lbl--green">Green</span>
            <span className="lbl lbl--yellow">Yellow</span>
            <span className="lbl lbl--orange">Orange</span>
            <span className="lbl lbl--white">White</span>
          </div>
        </div>
      </div>
    );
  }

}

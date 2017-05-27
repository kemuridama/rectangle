import React from 'react';

export default class DisabledButton extends React.Component {

  render() {
    const { onClick } = this.props;
    return (
      <div className="con">
        <div className="p">
          <div className="p__body">
            <button className="btn btn--disabled">Disabled Button</button>
            <button className="btn btn--red btn--disabled">Disabled Button</button>
          </div>
        </div>
      </div>
    );
  }

}

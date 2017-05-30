import React from 'react';

export default class RadioButton extends React.Component {

  render() {
    const { onChange } = this.props;
    return (
      <div className="con">
        <div className="p">
          <div className="p__body">
            <ul className="list list--unstyled">
              <li>
                <label className="radio__label">
                  <input type="radio" name="radio" className="radio" onChange={this.props.onChange.bind(this)} /> ラジオボタン 1
                </label>
              </li>
              <li>
                <label className="radio__label">
                  <input type="radio" name="radio" className="radio" onChange={this.props.onChange.bind(this)} /> ラジオボタン 2
                </label>
              </li>
              <li>
                <label className="radio__label">
                  <input type="radio" name="radio" className="radio" onChange={this.props.onChange.bind(this)} /> ラジオボタン 3
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

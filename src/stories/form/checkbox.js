import React from 'react';

export default class Checkbox extends React.Component {

  render() {
    const { onChange } = this.props;
    return (
      <div className="con">
        <div className="p">
          <div className="p__body">
            <ul className="list list--unstyled">
              <li>
                <label className="checkbox__label">
                  <input type="checkbox" className="checkbox" onChange={this.props.onChange.bind(this)} /> チェックボックス 1
                </label>
              </li>
              <li>
                <label className="checkbox__label">
                  <input type="checkbox" className="checkbox" onChange={this.props.onChange.bind(this)} /> チェックボックス 2
                </label>
              </li>
              <li>
                <label className="checkbox__label">
                  <input type="checkbox" className="checkbox" onChange={this.props.onChange.bind(this)} /> チェックボックス 3
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

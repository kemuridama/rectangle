import React from 'react';

export default class SelectBox extends React.Component {

  render() {
    const { onChange } = this.props;
    return (
      <div className="con">
        <div className="p">
          <div className="p__body">
            <select className="selectbox" onChange={onChange.bind(this)}>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>
      </div>
    );
  }

}

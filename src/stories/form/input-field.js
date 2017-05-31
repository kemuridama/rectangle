import React from 'react';

export default class InputField extends React.Component {

  render() {
    const { onChange } = this.props;
    return (
      <div className="con">
        <div className="p">
          <div className="p__body">
            <div className="input-field input-field--vertical">
              <label className="input-field__label input-field--vertical__label c-md-2" htmlFor="textbox1">テキストボックス 1</label>
              <div className="c-md-5">
                <input type="text" className="textbox" id="textbox1" placeholder="テキストボックス" onChange={this.props.onChange.bind(this)} />
              </div>
              <div className="c-md-5">
                <input type="text" className="textbox" id="textbox1-2" placeholder="テキストボックス" onChange={this.props.onChange.bind(this)} />
              </div>
            </div>
            <div className="input-field input-field--vertical">
              <label className="input-field__label input-field--vertical__label c-md-2" htmlFor="textbox2">テキストボックス 2</label>
              <div className="c-md-10">
                <input type="text" className="textbox" id="textbox2" placeholder="テキストボックス" onChange={this.props.onChange.bind(this)} />
              </div>
            </div>
            <div className="input-field">
              <label className="input-field__label" htmlFor="textbox3">テキストボックス 3</label>
              <input type="text" className="textbox" id="textbox3" placeholder="テキストボックス" onChange={this.props.onChange.bind(this)} />
            </div>
            <div className="input-field">
              <label className="input-field__label" htmlFor="textbox4">テキストボックス 4</label>
              <input type="text" className="textbox" id="textbox4" placeholder="テキストボックス" onChange={this.props.onChange.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

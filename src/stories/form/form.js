import React from 'react';

export default class Form extends React.Component {

  render() {
    return (
      <div className="con">
        <div className="p">
          <div className="p__body p__body--without-padding">
            <form className="form">
              <div className="form__header">
                <p className="form__header__text">
                  Enter your information into below fields.
                </p>
              </div>
              <div className="form__body">
                <div className="input-field">
                  <label className="input-field__label" htmlFor="textbox">Text Box <span className="lbl lbl--red">Required</span></label>
                  <input type="text" className="textbox" id="textbox" placeholder="Text Box" />
                </div>
                <div className="input-field">
                  <label className="input-field__label">Radio Button</label>
                  <ul className="list list--inline">
                    <li><label className="radio__label"><input type="radio" name="radio" className="radio" /> Radio Button 1</label></li>
                    <li><label className="radio__label"><input type="radio" name="radio" className="radio" /> Radio Button 2</label></li>
                  </ul>
                </div>
                <div className="input-field">
                  <label className="input-field__label">Check Box</label>
                  <ul className="list list--inline">
                    <li><label className="checkbox__label"><input type="checkbox" name="checkbox" className="checkbox" /> Check Box 1</label></li>
                    <li><label className="checkbox__label"><input type="checkbox" name="checkbox" className="checkbox" /> Check Box 2</label></li>
                  </ul>
                </div>
              </div>
              <div className="form__footer">
                <button type="clear" className="btn btn--red-o">Cancel</button>
                <button type="submit" className="btn btn--green">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

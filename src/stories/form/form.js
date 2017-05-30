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
                  以下のフィールド全てに入力が必要です。
                </p>
              </div>
              <div className="form__body">
                <div className="input-field">
                  <label className="input-field__label" htmlFor="textbox">テキストボックス <span className="lbl lbl--red">必須</span></label>
                  <input type="text" className="textbox" id="textbox" placeholder="テキストボックス" />
                </div>
                <div className="input-field">
                  <label className="input-field__label">ラジオボタン</label>
                  <ul className="list list--inline">
                    <li><label className="radio__label"><input type="radio" name="radio" className="radio" /> ラジオボタン 1</label></li>
                    <li><label className="radio__label"><input type="radio" name="radio" className="radio" /> ラジオボタン 2</label></li>
                  </ul>
                </div>
                <div className="input-field">
                  <label className="input-field__label">チェックボックス</label>
                  <ul className="list list--inline">
                    <li><label className="checkbox__label"><input type="checkbox" name="checkbox" className="checkbox" /> ラジオボタン 1</label></li>
                    <li><label className="checkbox__label"><input type="checkbox" name="checkbox" className="checkbox" /> ラジオボタン 2</label></li>
                  </ul>
                </div>
              </div>
              <div className="form__footer">
                <button type="clear" className="btn btn--red-o">キャンセル</button>
                <button type="submit" className="btn btn--green">送信</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

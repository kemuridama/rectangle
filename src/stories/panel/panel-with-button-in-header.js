import React from 'react';

export default class PanelWithButtonInHeader extends React.Component {

  render() {
    return (
      <div className="con">
        <div className="p">
          <header className="p__header p__header--with-border">
            <h1>Panel Header</h1>
            <div className="p__header p__header__toolbox">
              <button className="btn btn--blue">Button in Header</button>
            </div>
          </header>
          <div className="p__body">
            <p>
              Panel body. Panel body. Panel body. Panel body. Panel body.<br />
              Panel body. Panel body. Panel body. Panel body. Panel body.
            </p>
          </div>
          <footer className="p__footer p__footer--with-border">
            <p>Panel Footer</p>
          </footer>
        </div>
      </div>
    );
  }

}

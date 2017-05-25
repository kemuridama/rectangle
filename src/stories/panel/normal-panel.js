import React from 'react';

export default class NormalPanel extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="p">
          <h1 className="p__header p__header--without-bottom-padding">Panel Header</h1>
          <div className="p__body">
            <p>
              Panel body. Panel body. Panel body. Panel body. Panel body.<br />
              Panel body. Panel body. Panel body. Panel body. Panel body.
            </p>
          </div>
          <footer className="p__footer p__footer--without-top-padding">
            <p>Panel Footer</p>
          </footer>
        </div>
      </div>
    )
  }

}

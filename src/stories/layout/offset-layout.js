import React from 'react';

export default class OffsetLayout extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-2">
            <div className="p">
              <h3 className="p__header p__header--without-bottom-padding">1:1 Layout with Offset</h3>
              <div className="p__body">
                <p>
                  This is panel body. This is panel body. This is panel body.<br />
                  This is panel body. This is panel body. This is panel body.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p">
              <h3 className="p__header p__header--without-bottom-padding">1:1 Layout with Offset</h3>
              <div className="p__body">
                <p>
                  This is panel body. This is panel body. This is panel body.<br />
                  This is panel body. This is panel body. This is panel body.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="p">
              <h3 className="p__header p__header--without-bottom-padding">1:1:1 Layout with Offset</h3>
              <div className="p__body">
                <p>
                  This is panel body. This is panel body.<br />
                  This is panel body. This is panel body.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 offset-md-4">
            <div className="p">
              <h3 className="p__header p__header--without-bottom-padding">1:1:1 Layout with Offset</h3>
              <div className="p__body">
                <p>
                  This is panel body. This is panel body.<br />
                  This is panel body. This is panel body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

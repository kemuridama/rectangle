import React from 'react';

export default class FundamentalLayout extends React.Component {

  render() {
    return (
      <div className="con">
        <div className="row">
          <div className="c-md-6">
            <div className="p">
              <h3 className="p__header p__header--without-bottom-padding">1:1 Layout</h3>
              <div className="p__body">
                <p>
                  This is panel body. This is panel body. This is panel body.<br />
                  This is panel body. This is panel body. This is panel body.
                </p>
              </div>
            </div>
          </div>
          <div className="c-md-6">
            <div className="p">
              <h3 className="p__header p__header--without-bottom-padding">1:1 Layout</h3>
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
          <div className="c-md-4">
            <div className="p">
              <h3 className="p__header p__header--without-bottom-padding">1:1:1 Layout</h3>
              <div className="p__body">
                <p>
                  This is panel body. This is panel body.<br />
                  This is panel body. This is panel body.
                </p>
              </div>
            </div>
          </div>
          <div className="c-md-4">
            <div className="p">
              <h3 className="p__header p__header--without-bottom-padding">1:1:1 Layout</h3>
              <div className="p__body">
                <p>
                  This is panel body. This is panel body.<br />
                  This is panel body. This is panel body.
                </p>
              </div>
            </div>
          </div>
          <div className="c-md-4">
            <div className="p">
              <h3 className="p__header p__header--without-bottom-padding">1:1:1 Layout</h3>
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

import React from 'react';

export default class InlineList extends React.Component {

  render() {
    return (
      <div className="con">
        <div className="p">
          <div className="p__body">
            <ul className="list list--inline">
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

import React from 'react';

export default class NormalTable extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="p">
          <div className="p__body p__body--without-padding">
            <table className="tbl">
              <thead className="tbl__header">
                <tr>
                  <th>Head 1</th>
                  <th>Head 2</th>
                  <th>Head 3</th>
                  <th>Head 4</th>
                  <th>Head 5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td>Data 3</td>
                  <td>Data 4</td>
                  <td>Data 5</td>
                </tr>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td>Data 3</td>
                  <td>Data 4</td>
                  <td>Data 5</td>
                </tr>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td>Data 3</td>
                  <td>Data 4</td>
                  <td>Data 5</td>
                </tr>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td>Data 3</td>
                  <td>Data 4</td>
                  <td>Data 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

}

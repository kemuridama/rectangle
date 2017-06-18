import React from 'react';

export default class TableWithClickableRow extends React.Component {

  render() {
    const { onClick } = this.props;
    return (
      <div className="con">
        <div className="p">
          <div className="p__body p__body--without-padding">
            <table className="tbl">
              <thead className="tbl__header">
                <tr>
                  <th className="tbl__col">Head 1</th>
                  <th className="tbl__col">Head 2</th>
                  <th className="tbl__col">Head 3</th>
                  <th className="tbl__col">Head 4</th>
                  <th className="tbl__col">Head 5</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tbl__row tbl__row--clickable" onClick={onClick.bind(this)}>
                  <td className="tbl__col">Data 1</td>
                  <td className="tbl__col">Data 2</td>
                  <td className="tbl__col">Data 3</td>
                  <td className="tbl__col">Data 4</td>
                  <td className="tbl__col">Data 5</td>
                </tr>
                <tr className="tbl__row tbl__row--clickable" onClick={onClick.bind(this)}>
                  <td className="tbl__col">Data 1</td>
                  <td className="tbl__col">Data 2</td>
                  <td className="tbl__col">Data 3</td>
                  <td className="tbl__col">Data 4</td>
                  <td className="tbl__col">Data 5</td>
                </tr>
                <tr className="tbl__row tbl__row--clickable" onClick={onClick.bind(this)}>
                  <td className="tbl__col">Data 1</td>
                  <td className="tbl__col">Data 2</td>
                  <td className="tbl__col">Data 3</td>
                  <td className="tbl__col">Data 4</td>
                  <td className="tbl__col">Data 5</td>
                </tr>
                <tr className="tbl__row tbl__row--clickable" onClick={onClick.bind(this)}>
                  <td className="tbl__col">Data 1</td>
                  <td className="tbl__col">Data 2</td>
                  <td className="tbl__col">Data 3</td>
                  <td className="tbl__col">Data 4</td>
                  <td className="tbl__col">Data 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

}

import React from 'react';

class TableEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <tr>
          <td>{this.props.repo.username}</td>
          <td>{this.props.repo.repository.name}</td>
          <td>{this.props.repo.repository.url}</td>
          <td>{this.props.repo.repository.description}</td>
          <td>{this.props.repo.repository.numberForks}</td>
        </tr>
      </div>
    )
  }
}


export default TableEntry;

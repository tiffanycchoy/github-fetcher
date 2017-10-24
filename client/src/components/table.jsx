import React from 'react';
import TableEntry from './tableEntry.jsx';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <tr>
          <th>Username</th>
          <th>Repo Name</th>
          <th>Repo URL</th>
          <th>Repo Description</th>
          <th>Number of forks</th>
        </tr>
        {this.props.repos.map((repo) => <TableEntry repo = {repo} />)}
      </div>
    )
  }
}

export default Table;

/*
{[1,2,3].map((number) => <TableEntry  number = {1}/>)}

*/

import React from 'react';
import Table from './Table.jsx';

class RepoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4> Repo List Component </h4>
        There are {this.props.repos.length} repos.

        <Table repos = {this.props.repos} />
      </div>
    )
  }
}


export default RepoList;

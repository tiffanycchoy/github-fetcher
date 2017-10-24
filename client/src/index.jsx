import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this);
    this.fetchRepositories = this.fetchRepositories.bind(this);
    this.fetchFromDB = this.fetchFromDB.bind(this);
  }

  componentDidMount() {
    this.fetchFromDB();
  }

  search (term) {
    console.log(`${term} was searched`);
    this.fetchRepositories(term);
  }

  fetchRepositories(username) {
    $.ajax({
      method: 'POST',
      url: '/repos',
      data: {
        username: username
      },
      success(data) {
        console.log('successfully retrieved repositories ',  data);
        this.fetchFromDB();
      },
      error(err) {
        console.log('error fetching repositories for ', username)
      }
    })
  }

  fetchFromDB() {
    var context = this;
    $.ajax({
      method: 'GET',
      url: '/repos',
      data: {

      }, success(data) {
        console.log('##successfully retrieved data from db ', data);
        context.setState({
          repos: data
        })
      }, error(err) {
        console.log('error fetching data from db ', err);
      }
    })
  }


  render () {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos}/>
        <Search onSearch={this.search}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

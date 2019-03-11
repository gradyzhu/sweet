import React, {Component} from 'react';
import Dashboard from '../components/dashboard/dashboard';

class Search extends Component {

  render() {
    return (
      <div>
        <h1>Sentiment Analytics</h1>
        <Dashboard />
        <footer>
            Copyright &copy; 2019 Chirper
        </footer>
      </div>
    );
  }
}

export default Search;
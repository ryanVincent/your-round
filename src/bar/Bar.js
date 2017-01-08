import React, { Component } from 'react';
import { fetchBars } from './api';
import BarList from './components/BarList';
import SearchBar from './components/SearchBar';
function matchesSearchTerm(bar, searchTerm) {
  return bar.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         bar.address.toLowerCase().includes(searchTerm.toLowerCase());
}

export default class PubContainer extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      bars: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    fetchBars()
      .then((bars) => {
        this.setState({ bars });
      })
  }

  handleChange(searchTerm) {
    this.setState({ searchTerm });
  }

  render() {
    let { bars, searchTerm } = this.state;
    bars = bars.filter(bar => matchesSearchTerm(bar, searchTerm));
    return (
      <div>
        <SearchBar onChange={this.handleChange} />
        <BarList bars={bars} />
      </div>


    )
  }


}

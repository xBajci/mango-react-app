import React, { Component } from 'react';
import _ from 'lodash';
import {
  Col as Column,
} from 'react-bootstrap';

import { Page, Header } from './components/Layout';
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';
import ResultDetail from './components/ResultDetail';
import CurrencySwith from './components/Currency/CurrencySwitch';
import CurrencyContext from './components/Currency/CurrencyContext';
import searchFlights from './actions/searchFlightsCached';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      selected: undefined,
      currency: 'EUR',
      offset: 0,
      limit: 5,
    };
  }

  handleSearchFlights = (from, to, date, offset, limit) => {
    return searchFlights(from, to, date, offset, limit)
      .then(results => {
        this.setState({
          results,
        });
      });
  }

  handleOnSearchClick = () => {
    const { from, to, date } = this.form.getValues();
    const { offset, limit } = this.state;
    this.handleSearchFlights(from, to, date, offset, limit);
  };

  handleOnResultClick = id => {
    const selected = _.find(this.state.results, { id });
    this.setState({
      selected,
    });
  };

  hangeOnCurrencyChange = (currency) => {
    this.setState({
      currency,
    });
  }

  handleOnPaginationClick = (newOffset) => {
    const { from, to, date } = this.form.getValues();
    const { limit } = this.state;

    this.handleSearchFlights(from, to, date, newOffset, limit);
    this.setState({
        offset: newOffset
      }
    );
  }

  render() {
    const { selected, results, currency, offset, limit } = this.state;
    return (
      <Page>
        <Header />
        <CurrencyContext.Provider value={currency}>
          <Column xs={4}>

            <CurrencySwith
              currency={currency}
              onChange={this.hangeOnCurrencyChange}
            />

            <SearchForm
              ref={r => (this.form = r)}
              onSearch={this.handleOnSearchClick}
            />

            <ResultList
              items={results}
              selected={selected}
              onResultClick={this.handleOnResultClick}
              onPagePrevClick={() => this.handleOnPaginationClick(offset - limit > 0 ? offset - limit : 0)}
              onPageNextClick={() => this.handleOnPaginationClick(offset + limit)}
            />

          </Column>

          <Column xs={8}>

            <ResultDetail
              selected={selected}
              onNextClick={this.handleOnPageNext}
              onPrevClick={this.handleOnPagePrev}
            />

          </Column>
        </CurrencyContext.Provider>
      </Page>
    );
  }
}

export default App;

import React from 'react';
import _ from 'lodash';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import fetchLocations from '../../actions/fetchLocations';

export default class PlacePicker extends React.Component {
  constructor(props) {
    super(props);
    this.loadOptionsDebounced =  _.debounce(this.loadOptions, 300);
  }

  loadOptions = (input, cb) => {
    fetchLocations(input)
      .then(data => {
        cb(null, { options: data })
      })
      .catch(err => cb(err))
  };

  render() {
    const { value, onChange, placeholder } = this.props;
    return (
      <Select.Async
        multi={false}
        value={value}
        onChange={onChange}
        autoload={false}
        loadOptions={this.loadOptionsDebounced}
        placeholder={placeholder}
        />
    );
  }
}

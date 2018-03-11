import React from 'react';
import moment from 'moment';
import { InputGroup, Glyphicon, FormControl } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

class InputWithButton extends React.Component {
  render() {
    const { props } = this;
    return (
      <InputGroup>
        <InputGroup.Addon>
          <Glyphicon glyph="glyphicon glyphicon-calendar" />
        </InputGroup.Addon>
        <FormControl onClick={props.onClick} value={props.value} onChange={props.onChange} placeholder="Username" disabled={props.disabled}/>
      </InputGroup>
    );
  }
}

export default function DatePicker({ value, onChange }) {
  const selected = moment(value);
  return (
    <ReactDatePicker
      dateFormat="DD/MM/YYYY"
      selected={selected}
      onChange={(moment) => onChange(moment.toDate())}
      customInput={<InputWithButton />}
    />
  );
};

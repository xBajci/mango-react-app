import React from 'react';
import {
  Row,
  Col as Column,
  InputGroup,
  FormGroup,
  Glyphicon,
  Button,
  ButtonToolbar,
  ButtonGroup,
} from 'react-bootstrap';

import PlacePicker from '../PlacePicker';
import DatePicker from '../DatePicker';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: {value: "brno_cz", label: "Brno"},
      to: {value: "barcelona_es", label: "Barcelona"},
      date: new Date(),
    };
  }

  handleInputChange = (input, value) => {
    console.log(input, value);
    this.setState({
      [input]: value,
    });
  };

  // is it better to provide onChange to SearchForm or provide getValues ??
  // maybe for the sake of consistency onChange would be better thus child component
  // notifies it's parent about it's change
  // but will keep it as is as i'm tired now :)
  getValues = () => {
    const {from, to, date} = this.state;
    return {
      from: from && from.value,
      to: to && to.value,
      date,
    };
  };

  render() {
    const { from, to, date } = this.state;
    const { onSearch } = this.props;
    return (
      <React.Fragment>
        <Row>
          <Column xs={12}>
          <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <Glyphicon glyph="glyphicon glyphicon-export" />
                </InputGroup.Addon>
                <PlacePicker
                  value={from}
                  onChange={value =>
                    this.handleInputChange('from', value)
                  }
                  placeholder="Select from"
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>
                  <Glyphicon glyph="glyphicon glyphicon-import" />
                </InputGroup.Addon>
                <PlacePicker
                  value={to}
                  onChange={value =>
                    this.handleInputChange('to', value)
                  }
                  placeholder="Select to"
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <DatePicker
                value={date}
                onChange={date => this.handleInputChange('date', date)}
              />
            </FormGroup>
            <FormGroup>
              <ButtonToolbar>
                <ButtonGroup className="pull-right">
                  <Button
                    bsStyle="primary"
                    onClick={onSearch}
                  >
                    Search
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </FormGroup>
          </Column>
        </Row>
      </React.Fragment>
    );
  }
}

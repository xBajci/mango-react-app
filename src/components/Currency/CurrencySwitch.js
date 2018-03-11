import React from 'react';
import {
  Row,
  Col as Column,
  ToggleButtonGroup,
  ToggleButton,
  FormGroup,
} from 'react-bootstrap';

import CurrencyContext from './CurrencyContext';

export default function CurrencySwith({ currency, onChange }) {
  return (
    <Row>
      <Column xs={12}>
        <CurrencyContext.Consumer>
          {currency => {
            return (
              <FormGroup>
                <ToggleButtonGroup
                  bsSize="xsmall"
                  type="radio"
                  name="currency"
                  value={currency}
                  onChange={onChange}
                >
                  <ToggleButton value={'EUR'}>EUR</ToggleButton>
                  <ToggleButton value={'CZK'}>CZK</ToggleButton>
                </ToggleButtonGroup>
              </FormGroup>
            );
          }}
        </CurrencyContext.Consumer>
      </Column>
    </Row>
  );
}

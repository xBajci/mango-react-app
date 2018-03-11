import React from 'react';
import { Row, Col as Column } from 'react-bootstrap';
import moment from 'moment';
import classnames from 'classnames';
import CurrencyContext from '../Currency/CurrencyContext';

export default function ListItem({ item, selected, onClick }) {
  const listItemClasses = classnames({
    'list-group-item': true,
    active: item.id === (selected && selected.id),
  });

  const listItemStyles = {
    cursor: 'pointer',
    marginBottom: 5,
  };

  return (
    <CurrencyContext.Consumer>
      {
        (currency) => {
          return (
            <li
              className={listItemClasses}
              style={listItemStyles}
              onClick={() => onClick(item.id)}
            >
              <Row>
              <Column xs={3}>
                  <div>{item.cityFrom}</div>
                  <div>{item.cityTo}</div>
                </Column>
                <Column xs={3}>
                  <div>{item.conversion[currency]} {currency}</div>
                  <div>{item.fly_duration}</div>
                </Column>
                <Column xs={3}>
                  {moment
                    .utc(item.dTimeUTC * 1000)
                    .local()
                    .format('HH:MM')}{' '}
                  -{' '}
                  {moment
                    .utc(item.aTimeUTC * 1000)
                    .local()
                    .format('HH:MM')}
                </Column>
                <Column xs={3}>Transfers: {item.route.length}</Column>
              </Row>
            </li>
          )
        }}
      }
    </CurrencyContext.Consumer>
  );
}

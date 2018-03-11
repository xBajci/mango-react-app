import React from 'react';
import { Row, Col as Column } from 'react-bootstrap';
import ReactJson from 'react-json-view'

export default function ResultDetail({ selected}) {
  return selected ? (
    <Row>
      <Column xs={12}>
        <ReactJson src={selected} />
      </Column>
    </Row>
  ) : null;
}

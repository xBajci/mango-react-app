import React from 'react';
import { Row, Col as Column, ListGroup, Pager } from 'react-bootstrap';

import ListItem from './ListItem';

export default function ResultList({ items, selected, onResultClick, onPagePrevClick, onPageNextClick }) {
  if (!items || items.length === 0) {
    return "Something beautiful will be here ... click on Search ;-)"
  }
  return (
    <Row>
      <Column xs={12}>
        <ListGroup componentClass="ul">
          {items
            .slice(0, 5)
            .map(item => (
              <ListItem
                key={item.id}
                item={item}
                selected={selected}
                onClick={onResultClick}
              />
            ))}
        </ListGroup>

        <Pager>
          <Pager.Item previous onClick={onPagePrevClick}>
            &larr; Previous Page
          </Pager.Item>
          <Pager.Item next onClick={onPageNextClick}>
            Next Page &rarr;
          </Pager.Item>
        </Pager>
      </Column>
    </Row>
  );
}

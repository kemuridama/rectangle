import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import '../styles.scss';
import NormalTable from './table/normal-table';
import TableWithClickableRow from './table/table-with-clickable-row';

/* global module */
storiesOf('Table', module)
  .add('Normal', () => {
    return <NormalTable />;
  })
  .add('With Clickable Row', () => {
    return <TableWithClickableRow onClick={action('click')} />;
  });

import React from 'react';
import { storiesOf } from '@kadira/storybook';

import '../styles.scss';
import FundamentalLayout from './layout/fundamental-layout';
import OffsetLayout from './layout/offset-layout';

/* global module */
storiesOf('Layout', module)
  .add('Fundamental', () => {
    return <FundamentalLayout />;
  })
  .add('Offset', () => {
    return <OffsetLayout />;
  });

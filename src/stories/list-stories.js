import React from 'react';
import { storiesOf } from '@kadira/storybook';

import '../styles.scss';
import NormalList from './list/normal-list';
import UnstyledList from './list/unstyled-list';
import InlineList from './list/inline-list';

/* global module */
storiesOf('List', module)
  .add('Normal', () => {
    return <NormalList />;
  })
  .add('Unstyled', () => {
    return <UnstyledList />;
  })
  .add('Inline', () => {
    return <InlineList />;
  });

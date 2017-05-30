import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import '../styles.scss';
import Checkbox from './form/checkbox';

/* global module */
storiesOf('Form', module)
  .add('Checkbox', () => {
    return <Checkbox onChange={action('change')} />;
  });

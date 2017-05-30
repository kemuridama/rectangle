import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import '../styles.scss';
import Checkbox from './form/checkbox';
import RadioButton from './form/radio-button';

/* global module */
storiesOf('Form', module)
  .add('Checkbox', () => {
    return <Checkbox onChange={action('change')} />;
  })
  .add('Radio Button', () => {
    return <RadioButton onChange={action('change')} />;
  });

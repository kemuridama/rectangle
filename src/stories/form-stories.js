import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import '../styles.scss';
import InputField from './form/input-field';
import Checkbox from './form/checkbox';
import RadioButton from './form/radio-button';

/* global module */
storiesOf('Form', module)
  .add('InputField', () => {
    return <InputField onChange={action('change')} />;
  })
  .add('Checkbox', () => {
    return <Checkbox onChange={action('change')} />;
  })
  .add('Radio Button', () => {
    return <RadioButton onChange={action('change')} />;
  });

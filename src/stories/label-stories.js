import React from 'react';
import { storiesOf } from '@kadira/storybook';

import '../styles.scss';
import NormalLabel from './label/normal-label';
import LabelColors from './label/label-colors';

/* global module */
storiesOf('Label', module)
  .add('Normal', () => {
    return <NormalLabel />;
  })
  .add('Colors', () => {
    return <LabelColors />;
  });

import React from 'react';
import { storiesOf } from '@kadira/storybook';

import '../styles.scss';
import NormalPanel from './panel/normal-panel';
import PanelWithBorders from './panel/panel-with-borders';

/* global module */
storiesOf('Panel', module)
  .add('Normal', () => (
    <NormalPanel />
  ))
  .add('With Borders', () => (
    <PanelWithBorders />
  ));

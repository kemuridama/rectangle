import React from 'react';
import { storiesOf } from '@kadira/storybook';

import '../styles.scss';
import NormalPanel from './panel/normal-panel';
import PanelWithBorders from './panel/panel-with-borders';
import PanelWithButtonInHeader from './panel/panel-with-button-in-header';

/* global module */
storiesOf('Panel', module)
  .add('Normal', () => (
    <NormalPanel />
  ))
  .add('With Borders', () => (
    <PanelWithBorders />
  ))
  .add('With Button in Header', () => (
    <PanelWithButtonInHeader />
  ));

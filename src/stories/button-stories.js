import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import '../styles.scss';
import NormalButton from './button/normal-button';
import ButtonColors from './button/button-colors';
import ButtonOutlineColors from './button/button-outline-colors';
import ButtonSizes from './button/button-sizes';
import BlockButton from './button/block-button';
import DisabledButton from './button/disabled-button';

/* global module */
storiesOf('Button', module)
  .add('Normal', () => {
    return <NormalButton onClick={action('click')} />;
  })
  .add('Colors', () => {
    return <ButtonColors onClick={action('click')} />;
  })
  .add('Outline Colors', () => {
    return <ButtonOutlineColors onClick={action('click')} />;
  })
  .add('Sizes', () => {
    return <ButtonSizes onClick={action('click')} />;
  })
  .add('Block Button', () => {
    return <BlockButton onClick={action('click')} />;
  })
  .add('Disabled Button', () => {
    return <DisabledButton onClick={action('click')} />;
  });

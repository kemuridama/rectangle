import React from 'react';
import { storiesOf } from '@kadira/storybook';

import '../styles.scss';
import LoadingSample from './components/loading-sample';
import LoadingSampleWithCustomMessage from './components/loading-sample-with-custom-message';
import ModalSample from './components/modal-sample';

/* global module */
storiesOf('Components', module)
  .add('Loading Sample', () => {
    return <LoadingSample />;
  })
  .add('Loading Sample with Custom Message', () => {
    return <LoadingSampleWithCustomMessage />;
  })
  .add('Modal Sample', () => {
    return <ModalSample />;
  });

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import '../styles.scss';
import LoadingSample from './components/loading-sample';
import LoadingSampleWithCustomMessage from './components/loading-sample-with-custom-message';
import ModalSample from './components/modal-sample';
import NavbarSample from './components/navbar-sample';
import NavbarFixedTopSample from './components/navbar-fixed-top-sample';
import NavbarFixedBottomSample from './components/navbar-fixed-bottom-sample';

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
  })
  .add('Navbar Sample', () => {
    return <NavbarSample onClick={action('click')} />;
  })
  .add('Navbar Fixed Top Sample', () => {
    return <NavbarFixedTopSample onClick={action('click')} />;
  })
  .add('Navbar Fixed Bottom Sample', () => {
    return <NavbarFixedBottomSample onClick={action('click')} />;
  });

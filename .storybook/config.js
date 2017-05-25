import { configure } from '@kadira/storybook';

const requires = require.context('../src/stories', true, /\.js$/);

const loadStories = () => {
  requires.keys().forEach((filename) => requires(filename));
}

configure(loadStories, module);

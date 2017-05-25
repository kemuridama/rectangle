module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true,
      'modules': true
    },
    'sourceType': 'module'
  },
  'plugins': ['react'],
  'rules': {
    'indent': [2, 2],
    'linebreak-style': [2, 'unix'],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2
  }
};

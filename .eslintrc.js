module.exports = {
  env: {
    es6: true,
    jest: true,
    'react-native/react-native': true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
    fetch: false,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // 'linebreak-style': ['error', 'unix'],
    'linebreak-style': ['error', 'windows'],
    // 'eslint eol-last': ['error', 'always'],
    // 'files.eol': ['\n'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-undef': 'error',
  },
};
// https://edusutil.medium.com/eslint-with-prettier-settings-for-react-native-ce13d2aaf500
// https://www.imaginarycloud.com/blog/how-to-configure-eslint-prettier-in-react/
// https://www.andrewmin.info/blog/react-setup/

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 0,
  //  'linebreak-style': ['error', 'windows'],
  },
};

// https://edusutil.medium.com/eslint-with-prettier-settings-for-react-native-ce13d2aaf500
// https://www.imaginarycloud.com/blog/how-to-configure-eslint-prettier-in-react/
// https://www.andrewmin.info/blog/react-setup/

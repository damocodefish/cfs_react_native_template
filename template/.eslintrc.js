module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    'react-native/react-native': true,
   jest: true,
    "jest/globals": true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
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
  extends: [
    '@react-native-community',
    'airbnb-base',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    'react-native',
    'prettier',
    'jest',
  ],
  rules: {
    'quotes': [2, 'single', {'avoidEscape': true}],
    'no-underscore-dangle': 'off',
    'react/prop-types': 'warn',
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 4,
        trailingComma: 'es5',
      },
    ],
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@fixtures', './__fixtures__'],
          ['@mocks', './__mocks__'],
          ['@root', './src'],
          ['@pages', './src/pages'],
          ['@components', './src/components'],
          ['@assets', './src/assets'],
          ['@helpers', './src/helpers'],
          ['@styles', './src/styles'],
          ['@layouts', './src/layouts'],
          ['@redux', './src/redux'],
          ['@services', './src/services'],
          ['@contexts', './src/contexts'],
          ['@hooks', './src/hooks'],
          ['@integrations', './src/integrations'],
        ],
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
      },
    },
  },
};

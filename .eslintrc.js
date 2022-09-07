module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [{
    "files": ["**/*.ts?(x)"],
    "rules": {
      "additional-typescript-only-rule": "warn"
    }
  }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}

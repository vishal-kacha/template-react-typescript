module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    "ecmaVersion": 'latest',
    "sourceType": "module",
    "project": "tsconfig.json",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: ['react-refresh', "react", "import", "jsx-a11y", "@typescript-eslint"],
  rules: {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/no-empty-function": 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    commonjs: true / false,
    amd: true / false,
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  }
}

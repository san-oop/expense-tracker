import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  { files: ['**/*.{js,ts,mjs,cjs,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true, tsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  },
  {
    plugins: ['react', 'react-native'],
  },
];

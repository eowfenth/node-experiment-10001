module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        },
        project: './tsconfig.json'
    },
    plugins: [
      '@typescript-eslint', 'prettier',
    ],
    extends: [
      'airbnb-typescript/base',
    ],
    rules: {
      "@typescript-eslint/camelcase": 0,
    }
};

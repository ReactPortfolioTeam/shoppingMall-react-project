module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': 0,
        'import/no-dynamic-require': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'global-require': 0,
        'import/no-extraneous-dependencies': 0,
        'jsx-quotes': [0, 'prefer-single'],
        'react/jsx-props-no-spreading': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'import/extensions': 0,
        'no-use-before-define': 0,
        'no-shadow': 'off',
        'react/prop-types': 0,
        'no-empty-pattern': 0,
        'no-alert': 0,
        'react-hooks/exhaustive-deps': 0,
        'react/destructuring-assignment': 0, // react props ...props
        'arrow-body-style': 0, // 화살표함수
    },
};

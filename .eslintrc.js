module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'eslint:recommended',
    ],
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
        indent: ['warn', 4],
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
        'react/self-closing-comp': 1, // 셀프 클로징 img br 컴포넌트 바로 닫아야 하는 경우  /> 경고
        'no-unused-vars': 1, // 사용하지 않는 변수 혹은 import 경고
        'jsx-a11y/anchor-is-valid': 1, //  href="#" 일경우 경고
        'no-undef': 1,
        'react/default-props-match-prop-types': 1,
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'jsx-a11y/label-has-for': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        camelcase: 0,
        'react/react-in-jsx-scope': 'off',
    },
};

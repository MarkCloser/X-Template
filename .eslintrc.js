module.exports = {
    root: true,
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'parser': 'babel-eslint',
        'ecmaFeatures': {
            'legacyDecorators': true
        }
    },
    'parser': 'vue-eslint-parser',
    'rules': {
        'indent': ['off', 2],
        'no-debugger': process.NODE_ENV === 'production'?2:0,
        'no-tabs': 'off',
        'no-mixed-spaces-and-tabs': 0
    }
}
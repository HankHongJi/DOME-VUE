// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
    parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: ['plugin:vue/essential'],
    // required to lint *.vue files
    plugins: [
    'vue'
    ],
    // add your custom rules here
    rules: {
    // allow debugger during development
    "no-var":2,//禁用var，用let和const代替
    "default-case": 2,//switch语句最后必须有default
    "indent": [2, 4],//缩进风格
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}

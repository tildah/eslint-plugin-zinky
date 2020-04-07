# eslint-plugin-zinky

this plugin is aimed to contain eslint rules specific to ZinkyJS

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
npm i eslint --save-dev
```

Next, install `eslint-plugin-zinky`:

```
npm install eslint-plugin-zinky --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-zinky` globally.

## Usage

Add `zinky` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "zinky"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "zinky/rule-name": 2
    }
}
```

## Supported Rules

### `id-length`

This rule behaves just like [`id-length`](https://eslint.org/docs/rules/id-length) native rule, taking into account, however, some ZinkyJS specificities.

1. Skips method prefixes in operations (`GET_`, `POST_`, ...)
2. Does not check `BEFORE` and `AFTER` hooks.

*NOTE: You should not use [`id-length`](https://eslint.org/docs/rules/id-length) alongside this rule.*

Code example:

```javascript
/*eslint zinky/id-length: ["error", { "max": 5 }]*/

GET_abc() {} // ✔ is VALID because "abc" has a length less than 5

GET_abcdef() {} // ✘ is NOT VALID because "abcdef" has a length greater than 5

BEFORE_GET_abcdef() // ✔ does NOT cause an ERROR. Because it will not be checked
```




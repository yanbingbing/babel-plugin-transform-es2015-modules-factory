# babel-plugin-transform-es2015-modules-factory

## Installation

```sh
$ npm install babel-plugin-transform-es2015-modules-factory
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-es2015-modules-factory"]
}
```

### Via CLI

```sh
$ babel --plugins transform-es2015-modules-factory script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-es2015-modules-factory"]
});
```

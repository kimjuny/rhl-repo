# rhl-repo

Problem: react-hot-loader checking correctly but not updating.

[![enter image description here][1]][1]

## Solution

Either way below fixes this problem.

### 1. add babel configuration

before:

`"presets": [["react"], ["es2015"]],`

after:

`"presets": [["react"], ["es2015", {"modules": false}]],`

### 2. import -> require

before:

```javascript
if(module.hot) {
  module.hot.accept('./routes/index.jsx', () => {
    doRender(Routes);
  });
}
```

after:

```javascript
if(module.hot) {
  module.hot.accept('./routes/index.jsx', () => {
    doRender(require('./routes/index.jsx').default);
  });
}
```

## Start

install and start webpack-dev-server
```
yarn && yarn server
```

on another terminal window

```
yarn start
```

  [1]: https://i.stack.imgur.com/EPPEM.png

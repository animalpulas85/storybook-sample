## Create React
```
npx create-react-app storybook-sample --template typescript
```

## Story Book install
```
npx storybook init
```

## Story Book Start
```
yarn storybook
```

## Story Book SnapShots
```
# add
yarn add @storybook/addon-storyshots --dev

# 対応 -> TypeError: Cannot read properties of undefined (reading 'current')
vi package.json
===================================
  "resolutions": {
    "react-test-renderer": "18.2.0"
  }
  ...
===================================

yarn install

touch storybook.test.js
vi storybook.test.js
===================================
import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
    framework: 'react',
    configPath: path.join(__dirname, '..', '.storybook'),
    // integrityOptions: { cwd: path.join(__dirname, 'stories') },
})
===================================

npm test storybook.test.js
# 自動でリロードされる
# 前からの差分が、エラーとして表示される
# 差分を最新にしたい場合は、「u」を押すと、最新snapshotが取得される
```


## Other Tool
https://marketplace.visualstudio.com/items?itemName=riccardoforina.storybook-helper

## Tool Start
```
yarn start
```
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






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

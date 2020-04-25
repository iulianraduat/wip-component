# wip-component ![Weekly downloads](https://img.shields.io/npm/dw/wip-component 'Weekly downloads')

A React component to show its children only when it is displayed in development.

There are companies which like to make the development of new features directly in the master branch.
In this way they do not need to use a release branch anymore.
This component is thought to help them achieve this.

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/wip-component/).

## Props

The component accepts the props defined bellow in the table.

### Props accepted by wip-component

| Name     | Type              | Required | Default | Description                                       |
| -------- | ----------------- | -------- | ------- | ------------------------------------------------- |
| children | JSX.Element\|null | yes      |         | The component to be displayed only in development |

---

### About versioning schema used for wip-component

- Major - it will be increased if the major version of the dependat package changes or there are breaking changes in the code of wip-component
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of wip-component

---

## Example

```js
import * as React from 'react';
import WIPComponent from 'wip-component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <WIPComponent>
          Here comes the component in development. It will be displayed only in the development environment.
        </WIPComponent>
      </div>
    );
  }
}

export default App;
```

---

## Changelog

### 1.0.0

- wip-component is made publicly available

### 1.0.1

- Small fix in Readme for the type of children

### 1.0.2

- Fixed typo in Readme

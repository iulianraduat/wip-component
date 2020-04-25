import React from 'react';
import { storiesOf } from '@storybook/react';
import { _WIPComponent } from '../src/_WIPComponent';

const style: React.CSSProperties = {
  paddingTop: 40,
  textAlign: 'center',
};

const SeeMe: React.FC = () => <div>You can see me</div>;

storiesOf('WIP', module)
  .addParameters({ options: { showPanel: false } })
  .add('hide the component in production', () => {
    return (
      <div style={style}>
        <div>You should not see a text below!</div>
        <_WIPComponent env={'production'}>
          <SeeMe />
        </_WIPComponent>
      </div>
    );
  })
  .add('shows the component in development', () => {
    return (
      <div style={style}>
        <div>You should see a text below!</div>
        <_WIPComponent env={'development'}>
          <SeeMe />
        </_WIPComponent>
      </div>
    );
  })
  .add('hide the component in other environments', () => {
    return (
      <div style={style}>
        <div>You should not see a text below!</div>
        <_WIPComponent env={'staging'}>
          <SeeMe />
        </_WIPComponent>
      </div>
    );
  })
  .add('accepts a null children', () => {
    return (
      <div style={style}>
        <div>You should not see a text below (even in development)!</div>
        <_WIPComponent env={'development'} children={null} />
      </div>
    );
  });

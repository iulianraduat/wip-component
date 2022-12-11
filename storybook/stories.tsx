import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { _WIPComponent } from '../src/_WIPComponent';

const style: React.CSSProperties = {
  paddingTop: 40,
  textAlign: 'center',
};

const SeeMe: React.FC = () => (
  <div style={{ fontSize: '200%', fontWeight: 'bold', paddingTop: 10 }}>
    You can see me
  </div>
);

export default {
  title: 'WIP',
  component: _WIPComponent,
} as ComponentMeta<typeof _WIPComponent>;

export const HideTheComponentInProduction: ComponentStory<
  typeof _WIPComponent
> = () => (
  <div style={style}>
    <div>You should not see a text below!</div>
    <_WIPComponent env={'production'}>
      <SeeMe />
    </_WIPComponent>
  </div>
);

export const ShowsTheComponentInDevelopment: ComponentStory<
  typeof _WIPComponent
> = () => (
  <div style={style}>
    <div>You should see a text below!</div>
    <_WIPComponent env={'development'}>
      <SeeMe />
    </_WIPComponent>
  </div>
);

export const HideTheComponentInOtherEnvironments: ComponentStory<
  typeof _WIPComponent
> = () => (
  <div style={style}>
    <div>You should not see a text below!</div>
    <_WIPComponent env={'staging'}>
      <SeeMe />
    </_WIPComponent>
  </div>
);

export const AcceptsANullChildren: ComponentStory<typeof _WIPComponent> =
  () => (
    <div style={style}>
      <div>You should not see a text below (even in development)!</div>
      <_WIPComponent env={'development'} children={null} />
    </div>
  );

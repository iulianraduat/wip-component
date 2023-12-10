import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
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

const meta: Meta<typeof _WIPComponent> = {
  title: 'WIP',
  component: _WIPComponent,
} as Meta<typeof _WIPComponent>;
export default meta;
type Story = StoryObj<typeof _WIPComponent>;

export const HideTheComponentInProduction = () => (
  <div style={style}>
    <div>You should not see a text below!</div>
    <_WIPComponent env={'production'}>
      <SeeMe />
    </_WIPComponent>
  </div>
);

export const ShowsTheComponentInDevelopment = () => (
  <div style={style}>
    <div>You should see a text below!</div>
    <_WIPComponent env={'development'}>
      <SeeMe />
    </_WIPComponent>
  </div>
);

export const HideTheComponentInOtherEnvironments = () => (
  <div style={style}>
    <div>You should not see a text below!</div>
    <_WIPComponent env={'staging'}>
      <SeeMe />
    </_WIPComponent>
  </div>
);

export const AcceptsANullChildren = () => (
  <div style={style}>
    <div>You should not see a text below (even in development)!</div>
    <_WIPComponent env={'development'} children={null} />
  </div>
);

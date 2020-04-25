import * as React from 'react';
import { _WIPComponent } from './_WIPComponent';

export interface WIPWIPComponentProps {
  children: JSX.Element | null;
}

class WIPComponent extends React.PureComponent<WIPWIPComponentProps> {
  public render() {
    const env = process.env.NODE_ENV;
    return <_WIPComponent children={this.props.children} env={process.env.NODE_ENV} />;
  }
}

export default WIPComponent;

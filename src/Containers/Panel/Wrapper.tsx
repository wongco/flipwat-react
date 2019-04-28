import React, { Component } from 'react';

class Wrapper extends Component<WrapperProps> {
  public render(): React.ReactNode {
    return <div>{this.props.children}</div>;
  }
}

interface WrapperProps {
  children: React.ReactNode[];
}

export default Wrapper;

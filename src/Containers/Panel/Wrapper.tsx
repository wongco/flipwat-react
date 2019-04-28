import React, { Component } from 'react';
import './Panel.css';

class Wrapper extends Component<WrapperProps> {
  public render(): React.ReactNode {
    return <div className="Panel">{this.props.children}</div>;
  }
}

interface WrapperProps {
  children: React.ReactNode[];
}

export default Wrapper;

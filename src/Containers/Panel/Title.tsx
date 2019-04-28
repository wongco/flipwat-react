import React, { Component } from 'react';

class Title extends Component<TitleProps> {
  public render(): React.ReactNode {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

interface TitleProps {
  name: string;
}

export default Title;

import React, { Component } from 'react';
import './Panel.css';
import CategoryList from './CategoryList';
import Title from './Title';
import Wrapper from './Wrapper';

class Panel extends Component {
  public async componentDidMount(): Promise<void> {
    // do async work to obtain categories data from API
  }

  public render(): React.ReactNode {
    return (
      <Wrapper>
        <Title name="Flipwat" />
        <CategoryList categories={[{ name: 'catOne' }, { name: 'catTwo' }]} />
      </Wrapper>
    );
  }
}

export default Panel;

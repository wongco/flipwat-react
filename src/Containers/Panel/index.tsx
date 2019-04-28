import React, { Component } from 'react';
import './Panel.css';
import CategoryList from './CategoryList';
import Title from './Title';
import Wrapper from './Wrapper';

class Panel extends Component<CategoryListProps> {
  public static defaultProps = {
    categories: [
      { name: 'catOne', id: '1231ds' },
      { name: 'catTwo', id: '34534ss' },
    ],
  };

  public async componentDidMount(): Promise<void> {
    // do async work to obtain categories data from API
  }

  public render(): React.ReactNode {
    return (
      <Wrapper>
        <Title name="Flipwat" />
        <CategoryList categories={this.props.categories} />
      </Wrapper>
    );
  }
}

interface CategoryListProps {
  categories: Category[];
}

interface Category {
  name: string;
  id: string;
}

export default Panel;

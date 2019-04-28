import React, { Component } from 'react';
import CategoryList from './CategoryList';
import Title from './Title';
import Wrapper from './Wrapper';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class Panel extends Component<PanelProps> {
  public async componentDidMount(): Promise<void> {
    /* check if this.props.categories.length = 0
         true, set loading state
         dispatch action to getCategories
    */
  }

  public navigateToCategory = (id: string): void => {
    this.props.history.push(`/category/${id}`);
  };

  public render(): React.ReactNode {
    return (
      <Wrapper>
        <Title name="Flipwat" />
        <CategoryList
          categories={this.props.categories}
          navigateToCategory={this.navigateToCategory}
        />
      </Wrapper>
    );
  }
}

interface PanelProps extends RouteComponentProps {
  categories: Category[];
}

interface Category {
  name: string;
  id: string;
}

export default withRouter(Panel);

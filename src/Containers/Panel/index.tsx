import React, { Component } from 'react';
import CategoryList from './CategoryList';
import Title from './Title';
import Wrapper from './Wrapper';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCategoryNames } from '../../Actions/actions';

class Panel extends Component<PanelProps> {
  public async componentDidMount(): Promise<void> {
    if (this.props.categories.length === 0) {
      this.props.loadCategoryNames();
    }
  }

  public navigateToCategory = (id: string): void => {
    this.props.history.push(`/category/${id}`);
  };

  public render(): React.ReactNode {
    const { loading, error, categories } = this.props;
    return (
      <Wrapper>
        <Title name="Flipwat" />
        {loading && <div>Updating...</div>}
        {error && <div>Error getting updated categories!</div>}
        <CategoryList
          categories={categories}
          navigateToCategory={this.navigateToCategory}
        />
      </Wrapper>
    );
  }
}

function mapStateToProps(state: any): any {
  const { categories, error, loading } = state;
  return {
    loading,
    error,
    categories,
  };
}

const connectedComponent = connect<PanelProps>(
  mapStateToProps,
  { loadCategoryNames },
);

export default connectedComponent(withRouter(Panel));

interface PanelProps extends RouteComponentProps {
  loading: boolean;
  error: boolean | Error;
  categories: Category[];
  loadCategoryNames: () => void;
}

interface Category {
  name: string;
  id: string;
}
